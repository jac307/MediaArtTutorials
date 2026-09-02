(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const pageContent = document.getElementById("page-content");

    if (!pageContent) {
      return;
    }

    const sections = Array.from(
      pageContent.querySelectorAll("details.tutorial-section")
    );

    if (sections.length === 0) {
      return;
    }

    const controls = document.createElement("div");
    const expandButton = document.createElement("button");
    const collapseButton = document.createElement("button");
    const status = document.createElement("span");
    let printState = null;

    controls.className = "section-controls";
    controls.setAttribute("role", "group");
    controls.setAttribute("aria-label", "Collapsible section controls");
    controls.setAttribute("data-speech-ignore", "");

    expandButton.className = "section-controls__button";
    expandButton.type = "button";
    expandButton.textContent = "Expand all";

    collapseButton.className = "section-controls__button";
    collapseButton.type = "button";
    collapseButton.textContent = "Collapse all";

    status.className = "screen-reader-only";
    status.setAttribute("aria-live", "polite");

    controls.append(expandButton, collapseButton, status);
    sections[0].insertAdjacentElement("beforebegin", controls);

    function updateButtons() {
      const openCount = sections.filter(function (section) {
        return section.open;
      }).length;

      expandButton.disabled = openCount === sections.length;
      collapseButton.disabled = openCount === 0;
    }

    function setAllSections(open, announce) {
      sections.forEach(function (section) {
        section.open = open;
      });

      updateButtons();

      if (announce) {
        status.textContent = open
          ? "All collapsible sections are expanded."
          : "All collapsible sections are collapsed.";
      }
    }

    function openSectionContaining(target, scrollToTarget) {
      if (!target || !pageContent.contains(target)) {
        return false;
      }

      let section = target.closest("details.tutorial-section");
      let openedSection = false;

      while (section) {
        section.open = true;
        openedSection = true;
        section = section.parentElement.closest("details.tutorial-section");
      }

      if (openedSection) {
        updateButtons();

        if (scrollToTarget) {
          window.requestAnimationFrame(function () {
            target.scrollIntoView({ block: "start" });
          });
        }
      }

      return openedSection;
    }

    function openCurrentHash(scrollToTarget) {
      if (!window.location.hash || window.location.hash === "#") {
        return;
      }

      let targetId;

      try {
        targetId = decodeURIComponent(window.location.hash.slice(1));
      } catch (error) {
        targetId = window.location.hash.slice(1);
      }

      openSectionContaining(document.getElementById(targetId), scrollToTarget);
    }

    expandButton.addEventListener("click", function () {
      setAllSections(true, true);
    });

    collapseButton.addEventListener("click", function () {
      setAllSections(false, true);
    });

    sections.forEach(function (section) {
      section.addEventListener("toggle", updateButtons);
    });

    document.addEventListener(
      "click",
      function (event) {
        const link = event.target.closest('a[href*="#"]');

        if (!link) {
          return;
        }

        let linkUrl;

        try {
          linkUrl = new URL(link.href, window.location.href);
        } catch (error) {
          return;
        }

        if (
          linkUrl.origin !== window.location.origin ||
          linkUrl.pathname !== window.location.pathname ||
          !linkUrl.hash
        ) {
          return;
        }

        let targetId;

        try {
          targetId = decodeURIComponent(linkUrl.hash.slice(1));
        } catch (error) {
          targetId = linkUrl.hash.slice(1);
        }

        openSectionContaining(document.getElementById(targetId), false);
      },
      true
    );

    window.addEventListener("hashchange", function () {
      openCurrentHash(true);
    });

    document.addEventListener("tutorial-sections:expand-all", function () {
      setAllSections(true, false);
    });

    window.addEventListener("beforeprint", function () {
      printState = sections.map(function (section) {
        return section.open;
      });

      setAllSections(true, false);
    });

    window.addEventListener("afterprint", function () {
      if (!printState) {
        return;
      }

      sections.forEach(function (section, index) {
        section.open = printState[index];
      });

      printState = null;
      updateButtons();
    });

    updateButtons();
    openCurrentHash(true);
  });
})();
