<template>
  <div class="about">
    <About msg="this is plant about page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";

export default {
  name: "about",
  components: {
    About
  }
};
</script>
