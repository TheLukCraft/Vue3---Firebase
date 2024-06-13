const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Luke Pat",
      age: "29",
    };
  },
  methods: {
    changeTitle() {
      this.title = "changed title";
    },
    changeTitleByArgument(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
