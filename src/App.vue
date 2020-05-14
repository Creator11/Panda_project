<template>
  <div id="app">
    <router-view>
      <mains />
    </router-view>
  </div>
</template>

<script>
// Imports
//import showBlogs from "./components/showBlogs.vue";
import mains from "./components/mains.vue";

export default {
  name: "app",
  components: {
    mains
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: Roboto;
}
</style>
