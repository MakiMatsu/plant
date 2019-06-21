<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="this is plant home page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home
  }
};
</script>
