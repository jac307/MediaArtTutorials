(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const pageContent = document.getElementById("page-content");

    if (!pageContent) {
      return;
    }

    const storagePrefix = "mediaart-checklist:v2";
    const pageKey = window.location.pathname.replace(/\/index\.html$/, "/");

    function createHash(value) {
      let hash = 2166136261;

      for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }

      return (hash >>> 0).toString(36);
    }

    function cleanText(value) {
      return value.replace(/\s+/g, " ").trim();
    }

    function readSavedState(storageKey) {
      try {
        return window.localStorage.getItem(storageKey);
      } catch (error) {
        return null;
      }
    }

    function saveState(storageKey, checked) {
      try {
        window.localStorage.setItem(storageKey, String(checked));
        return true;
      } catch (error) {
        return false;
      }
    }

    function removeSavedState(storageKey) {
      try {
        window.localStorage.removeItem(storageKey);
        return true;
      } catch (error) {
        return false;
      }
    }

    function getDirectTaskItems(list) {
      return Array.from(list.children).filter(function (child) {
        return child.matches("li.task-list-item");
      });
    }

    function getItemCheckbox(item) {
      return Array.from(item.children).find(function (child) {
        return child.matches('input[type="checkbox"]');
      });
    }

    function addProgressDisplay(list, checkboxes, listNumber) {
      const progress = document.createElement("div");
      const status = document.createElement("span");
      const resetButton = document.createElement("button");

      progress.className = "checklist-progress";
      progress.setAttribute("data-speech-ignore", "");

      status.className = "checklist-progress__status";
      status.id = "checklist-progress-" + listNumber;
      status.setAttribute("aria-live", "polite");

      resetButton.className = "checklist-progress__reset";
      resetButton.type = "button";
      resetButton.textContent = "Reset checklist";
      resetButton.setAttribute("aria-describedby", status.id);

      function updateProgress(savedSuccessfully) {
        const completed = checkboxes.filter(function (checkbox) {
          return checkbox.checked;
        }).length;

        const itemWord = checkboxes.length === 1 ? "item" : "items";
        const saveMessage =
          savedSuccessfully === false
            ? " Progress could not be saved in this browser."
            : " Saved on this device.";

        status.textContent =
          completed +
          " of " +
          checkboxes.length +
          " " +
          itemWord +
          " completed." +
          saveMessage;
      }

      resetButton.addEventListener("click", function () {
        let savedSuccessfully = true;

        checkboxes.forEach(function (checkbox) {
          checkbox.checked = false;

          if (!removeSavedState(checkbox.dataset.checklistStorageKey)) {
            savedSuccessfully = false;
          }
        });

        updateProgress(savedSuccessfully);
        checkboxes[0].focus();
      });

      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          const savedSuccessfully = saveState(
            checkbox.dataset.checklistStorageKey,
            checkbox.checked
          );

          updateProgress(savedSuccessfully);
        });
      });

      progress.append(status, resetButton);
      list.insertAdjacentElement("afterend", progress);
      list.setAttribute("aria-describedby", status.id);
      updateProgress(true);
    }

    function enhanceMarkdownChecklists() {
      const lists = Array.from(pageContent.querySelectorAll("ul.task-list"));

      lists.forEach(function (list, listIndex) {
        const items = getDirectTaskItems(list);
        const itemDetails = items
          .map(function (item) {
            const checkbox = getItemCheckbox(item);

            if (!checkbox) {
              return null;
            }

            return {
              checkbox: checkbox,
              text: cleanText(item.textContent)
            };
          })
          .filter(Boolean);

        if (itemDetails.length === 0) {
          return;
        }

        const listSignature = createHash(
          itemDetails
            .map(function (item) {
              return item.text;
            })
            .sort()
            .join("|")
        );
        const duplicateCount = {};

        itemDetails.forEach(function (item, itemIndex) {
          const itemHash = createHash(item.text || String(itemIndex));
          duplicateCount[itemHash] = (duplicateCount[itemHash] || 0) + 1;

          const storageKey = [
            storagePrefix,
            pageKey,
            listSignature,
            itemHash,
            duplicateCount[itemHash]
          ].join(":");

          item.checkbox.disabled = false;
          item.checkbox.removeAttribute("disabled");
          item.checkbox.dataset.checklistStorageKey = storageKey;
          item.checkbox.setAttribute(
            "aria-label",
            "Mark complete: " + (item.text || "checklist item")
          );

          const savedState = readSavedState(storageKey);

          if (savedState !== null) {
            item.checkbox.checked = savedState === "true";
          }
        });

        list.classList.add("interactive-checklist");
        addProgressDisplay(
          list,
          itemDetails.map(function (item) {
            return item.checkbox;
          }),
          listIndex + 1
        );
      });
    }

    function enhanceCustomChecklists() {
      const checkboxes = Array.from(
        pageContent.querySelectorAll(
          '.equipment-checklist input[type="checkbox"][data-checklist-id]'
        )
      );

      checkboxes.forEach(function (checkbox) {
        const storageKey = [
          storagePrefix,
          pageKey,
          "custom",
          checkbox.dataset.checklistId
        ].join(":");

        checkbox.dataset.checklistStorageKey = storageKey;

        const savedState = readSavedState(storageKey);

        if (savedState !== null) {
          checkbox.checked = savedState === "true";
        }

        checkbox.addEventListener("change", function () {
          saveState(storageKey, checkbox.checked);
        });
      });

      pageContent
        .querySelectorAll("[data-reset-checklist]")
        .forEach(function (button) {
          button.addEventListener("click", function () {
            checkboxes.forEach(function (checkbox) {
              checkbox.checked = false;
              removeSavedState(checkbox.dataset.checklistStorageKey);
            });
          });
        });
    }

    enhanceMarkdownChecklists();
    enhanceCustomChecklists();
  });
})();
