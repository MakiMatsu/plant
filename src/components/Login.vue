<template>
  <div class="login">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    msg: String
  }
};
</script>
