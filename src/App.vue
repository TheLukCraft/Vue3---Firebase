<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to="#modals" v-if="showModal">
    <Modal @close="toggleModal">
      <!-- name of slot is links -->
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Hi, Luke</h1>
      <p>What's up?</p>
    </Modal>
  </teleport>

  <!-- Second Modal -->

  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Hi, Luke second time</h1>
      <p>What's up brother?</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Open modal (alt)</button>
  <button @click="toggleModalTwo">Open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
