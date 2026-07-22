(function () {
  "use strict";

  const interactiveImages = document.querySelectorAll(
    "[data-interactive-image]"
  );

  interactiveImages.forEach(function (interactiveImage) {
    const hotspots = interactiveImage.querySelectorAll(
      ".image-hotspot[data-target]"
    );

    const panels = interactiveImage.querySelectorAll(
      ".image-information-panel"
    );

    function showPanel(selectedHotspot) {
      const targetId = selectedHotspot.dataset.target;
      const targetPanel = interactiveImage.querySelector(
        "#" + CSS.escape(targetId)
      );

      if (!targetPanel) {
        return;
      }

      hotspots.forEach(function (hotspot) {
        const isSelected = hotspot === selectedHotspot;

        hotspot.classList.toggle("is-active", isSelected);
        hotspot.setAttribute(
          "aria-pressed",
          isSelected ? "true" : "false"
        );
      });

      panels.forEach(function (panel) {
        panel.hidden = panel !== targetPanel;
      });
    }

    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("click", function () {
        showPanel(hotspot);
      });
    });
  });

    const imageRevealQuizzes = document.querySelectorAll(
    "[data-image-reveal-quiz]"
  );

  imageRevealQuizzes.forEach(function (quiz) {
    const choices = quiz.querySelectorAll(
      ".image-reveal-choice[data-answer]"
    );

    const answers = quiz.querySelectorAll(".image-reveal-answer");
    const instructions = quiz.querySelector("[data-quiz-instructions]");

    function showAnswer(selectedChoice) {
      const answerId = selectedChoice.dataset.answer;
      const selectedAnswer = quiz.querySelector(
        "#" + CSS.escape(answerId)
      );

      if (!selectedAnswer) {
        return;
      }

      choices.forEach(function (choice) {
        const isSelected = choice === selectedChoice;

        choice.classList.toggle("is-active", isSelected);
        choice.setAttribute(
          "aria-pressed",
          isSelected ? "true" : "false"
        );
      });

      answers.forEach(function (answer) {
        answer.hidden = answer !== selectedAnswer;
      });

      if (instructions) {
        instructions.textContent =
          selectedAnswer.querySelector("h3").textContent +
          " selected.";
      }
    }

    choices.forEach(function (choice) {
      choice.addEventListener("click", function () {
        showAnswer(choice);
      });
    });
  });

})();
