(function () {
  "use strict";

  const control = document.querySelector(".translation-control");
  const toggle = document.getElementById("translation-toggle");
  const menu = document.getElementById("translation-menu");
  const status = document.getElementById("translation-status");

  if (!control || !toggle || !menu || !status) {
    return;
  }

  const languageLinks = Array.from(
    menu.querySelectorAll("[data-translation-language]")
  );

  function setMenu(open, moveFocus) {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    control.classList.toggle("translation-control--open", open);

    if (open) {
      status.textContent = "Translation language menu opened.";

      if (moveFocus && languageLinks[0]) {
        languageLinks[0].focus();
      }
    } else {
      status.textContent = "Translation language menu closed.";
    }
  }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function closeAndReturnFocus() {
    setMenu(false, false);
    toggle.focus();
  }

  toggle.addEventListener("click", function () {
    setMenu(!isOpen(), false);
  });

  toggle.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setMenu(true, true);
    }
  });

  menu.addEventListener("keydown", function (event) {
    const currentIndex = languageLinks.indexOf(document.activeElement);

    if (event.key === "Escape") {
      event.preventDefault();
      closeAndReturnFocus();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();

      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + languageLinks.length) %
        languageLinks.length;

      languageLinks[nextIndex].focus();
    }

    if (event.key === "Home") {
      event.preventDefault();
      languageLinks[0].focus();
    }

    if (event.key === "End") {
      event.preventDefault();
      languageLinks[languageLinks.length - 1].focus();
    }
  });

  languageLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const language = link.dataset.translationLanguage;
      const translationUrl = new URL("https://translate.google.com/translate");

      translationUrl.searchParams.set("sl", "auto");
      translationUrl.searchParams.set("tl", language);
      translationUrl.searchParams.set("u", window.location.href);

      status.textContent = "Opening the translated page.";
      window.location.assign(translationUrl.toString());
    });
  });

  document.addEventListener("click", function (event) {
    if (isOpen() && !control.contains(event.target)) {
      setMenu(false, false);
    }
  });

  document.addEventListener("focusin", function (event) {
    if (isOpen() && !control.contains(event.target)) {
      setMenu(false, false);
    }
  });
})();
