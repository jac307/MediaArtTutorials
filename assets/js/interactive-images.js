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

})();
