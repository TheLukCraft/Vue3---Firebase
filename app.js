const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [
        { title: "name", author: "luk", img: "assets/book1.png", isFav: true },
        {
          title: "name2",
          author: "luk2",
          img: "assets/book2.png",
          isFav: false,
        },
        {
          title: "name3",
          author: "luk3",
          img: "assets/book3.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
