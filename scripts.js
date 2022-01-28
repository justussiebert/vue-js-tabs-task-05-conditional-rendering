Vue.createApp({
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeTabNumber(tabNumber) {
      this.activeTab = tabNumber;
      //console.log("Tab: ", this.activeTab);
    },
  },
}).mount("#app");
