const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "name", author: "luk" },
        { title: "name2", author: "luk2" },
        { title: "name3", author: "luk3" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
