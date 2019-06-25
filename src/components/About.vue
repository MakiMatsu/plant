<template>
  <div class="about">
    <h1>{{ msg }}</h1>さいとのせつめい
  </div>
</template>

<script>
export default {
  name: "about",
  props: {
    msg: String
  }
};
</script>
