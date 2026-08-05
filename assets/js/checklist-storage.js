document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(
    '.equipment-checklist input[type="checkbox"][data-checklist-id]'
  );

  checkboxes.forEach(function (checkbox) {
    const storageKey =
      `mediaart-checklist:${window.location.pathname}:${checkbox.dataset.checklistId}`;

    const savedState = localStorage.getItem(storageKey);

    if (savedState !== null) {
      checkbox.checked = savedState === "true";
    }

    checkbox.addEventListener("change", function () {
      localStorage.setItem(storageKey, String(checkbox.checked));
    });
  });

  document.querySelectorAll("[data-reset-checklist]").forEach(function (button) {
    button.addEventListener("click", function () {
      checkboxes.forEach(function (checkbox) {
        const storageKey =
          `mediaart-checklist:${window.location.pathname}:${checkbox.dataset.checklistId}`;

        checkbox.checked = false;
        localStorage.removeItem(storageKey);
      });
    });
  });
});