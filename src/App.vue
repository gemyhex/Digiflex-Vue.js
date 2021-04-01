<template>
  <pageLoader />
  <navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/NavbarII.vue";
import pageLoader from "./views/PageLoader.vue";
export default {
  components: {
    Navbar,
    pageLoader
  },
  methods: {
    openMenu() {
      document.getElementsByClassName(".side-wrapper").style.width = "75%";
    },
    closeMenu() {
      document.getElementsByClassName(".side-wrapper").style.width = "0";
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
body {
  background: #2c3e50;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  img {
    width: 100%;
    height: 100%;
  }
}

ul {
  list-style: none;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card-shadow {
  -webkit-box-shadow: 0px 5px 5px 0px rgba(8, 8, 8, 0.5);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
}
</style>
