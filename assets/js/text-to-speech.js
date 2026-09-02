(function () {
  "use strict";

  const playButton = document.getElementById("speech-play");
  const stopButton = document.getElementById("speech-stop");
  const statusElement = document.getElementById("speech-status");
  const pageContent = document.getElementById("page-content");

  if (!playButton || !stopButton || !statusElement || !pageContent) {
    return;
  }

  if (
    !("speechSynthesis" in window) ||
    !("SpeechSynthesisUtterance" in window)
  ) {
    playButton.disabled = true;
    stopButton.disabled = true;
    statusElement.textContent =
      "Text-to-speech is not supported by this browser.";
    return;
  }

  const speech = window.speechSynthesis;

  let textSections = [];
  let currentSection = 0;
  let isReading = false;

  /**
   * Creates a copy of the page and removes content that should not be read.
   */
  function getReadableText() {
    const contentCopy = pageContent.cloneNode(true);

    const ignoredElements = contentCopy.querySelectorAll(
  [
    "[data-speech-ignore]",
    "[hidden]",
    "script",
    "style",
    "noscript",
    "pre",
    "code",
    "button",
    "audio",
    "video",
    "iframe"
  ].join(",")
);

    ignoredElements.forEach(function (element) {
      element.remove();
    });

    return contentCopy.textContent
      .replace(/\s+/g, " ")
      .trim();
  }

  /**
   * Breaks a long page into shorter sections.
   */
  function splitText(text, maximumLength) {
    const sentences =
      text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];

    const sections = [];
    let currentText = "";

    sentences.forEach(function (sentence) {
      const cleanSentence = sentence.trim();

      if (!cleanSentence) {
        return;
      }

      const proposedText = currentText
        ? currentText + " " + cleanSentence
        : cleanSentence;

      if (proposedText.length <= maximumLength) {
        currentText = proposedText;
        return;
      }

      if (currentText) {
        sections.push(currentText);
      }

      if (cleanSentence.length <= maximumLength) {
        currentText = cleanSentence;
        return;
      }

      const words = cleanSentence.split(" ");
      let smallerSection = "";

      words.forEach(function (word) {
        const proposedSection = smallerSection
          ? smallerSection + " " + word
          : word;

        if (proposedSection.length <= maximumLength) {
          smallerSection = proposedSection;
        } else {
          if (smallerSection) {
            sections.push(smallerSection);
          }

          smallerSection = word;
        }
      });

      currentText = smallerSection;
    });

    if (currentText) {
      sections.push(currentText);
    }

    return sections;
  }

  /**
   * Chooses an English voice, preferring Canadian English.
   */
  function selectVoice() {
    const voices = speech.getVoices();

    return (
      voices.find(function (voice) {
        return voice.lang.toLowerCase() === "en-ca";
      }) ||
      voices.find(function (voice) {
        return voice.lang.toLowerCase() === "en-us";
      }) ||
      voices.find(function (voice) {
        return voice.lang.toLowerCase().startsWith("en");
      }) ||
      null
    );
  }

  function updateControls(reading) {
    playButton.disabled = reading;
    stopButton.disabled = !reading;

    document.body.classList.toggle("speech-is-reading", reading);
  }

  function finishReading(message) {
    isReading = false;
    currentSection = 0;
    textSections = [];

    updateControls(false);
    statusElement.textContent = message || "Reading stopped.";
  }

  function speakNextSection() {
    if (!isReading) {
      return;
    }

    if (currentSection >= textSections.length) {
      finishReading("Finished reading the page.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      textSections[currentSection]
    );

    const selectedVoice = selectVoice();

    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang =
        document.documentElement.lang || "en-CA";
    }

    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = function () {
      currentSection += 1;
      speakNextSection();
    };

    utterance.onerror = function (event) {
      if (event.error === "canceled" || event.error === "interrupted") {
        return;
      }

      finishReading("The page could not be read.");
    };

    speech.speak(utterance);
  }

  function startReading() {
    document.dispatchEvent(
      new CustomEvent("tutorial-sections:expand-all")
    );

    const readableText = getReadableText();

    if (!readableText) {
      statusElement.textContent =
        "There is no readable text on this page.";
      return;
    }

    speech.cancel();

    textSections = splitText(readableText, 220);
    currentSection = 0;
    isReading = true;

    updateControls(true);
    statusElement.textContent =
      "All sections expanded. Reading the page.";

    speakNextSection();
  }

  function stopReading() {
    isReading = false;
    speech.cancel();

    finishReading("Reading stopped.");
  }

  playButton.addEventListener("click", startReading);
  stopButton.addEventListener("click", stopReading);

  window.addEventListener("beforeunload", function () {
    speech.cancel();
  });
})();
