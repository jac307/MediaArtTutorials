const app = Vue.createApp({
  data() {
    return {
      items: [],

      selectedItem: {
        title: "",
        description: "",
        tutorialEmbedCode: ""
      },

      errorMessage: ""
    };
  },

  async created() {
    const urlParams = new URLSearchParams(window.location.search);

    const jsonFile =
      urlParams.get("file") || "Linear-Video-Editing.json";

    try {
      const response = await fetch(`./${jsonFile}`);

      if (!response.ok) {
        throw new Error(
          `Could not load ${jsonFile}. Server returned ${response.status}.`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error(
          `${jsonFile} does not contain any tutorial information.`
        );
      }

      this.items = data;

      /*
        Open the first tutorial automatically.

        If the first item has children, select its first child.
        Otherwise, select the first item itself.
      */
      const firstItem = data[0];

      this.selectedItem =
        firstItem.children?.[0] || firstItem;
    } catch (error) {
      console.error("Error loading tutorial file:", error);

      this.errorMessage =
        "The tutorial could not be loaded. Please return to the homepage and try again.";

      this.selectedItem = {
        title: "Tutorial unavailable",
        description: "",
        tutorialEmbedCode: ""
      };
    }
  },

  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.errorMessage = "";
    },

    isSelected(item) {
      return this.selectedItem === item;
    }
  }
});

const vuetify = Vuetify.createVuetify();

app.use(vuetify);
app.mount("#app");