const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        { title: "name", author: "luk", img: "assets/book1.png" },
        { title: "name2", author: "luk2", img: "assets/book2.png" },
        { title: "name3", author: "luk3", img: "assets/book3.png" },
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
