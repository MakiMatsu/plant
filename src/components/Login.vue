<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    msg: String
  },
  methods: {
    onLogin() {
      this.$router.push("/chat");
    }
  }
};
</script>
