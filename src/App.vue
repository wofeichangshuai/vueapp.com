<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <HelloWorld/> -->
    <!-- <componentA /> -->
    <!-- <Users /> -->
    <Blog />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import ComponentA from "./components/ComponentA";
import Blog from "./components/Blog";

export default {
  name: "App",
  components: {
    // HelloWorld
    Users,
    ComponentA,
    Blog
  },
  methods: {}
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
body {
  margin: 0%;
  color: #eee;
  background-color: #454545;
}
</style>
