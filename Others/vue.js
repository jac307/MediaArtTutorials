const app = Vue.createApp({
  data() {
    return {
      drawer: false,
      items: [],
      selectedItem: null
    };
  },
  async created() {
    // Get the JSON file name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const jsonFile = urlParams.get('file') 

    try {
      const response = await fetch(`./${jsonFile}`); // Dynamically load the JSON file
      const data = await response.json();
      this.items = data;
      this.selectedItem = data[0];
    } catch (error) {
      console.error('Error loading JSON file:', error);
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    }
  }
});

const vuetify = Vuetify.createVuetify();
app.use(vuetify);
app.mount('#app');