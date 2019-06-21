<template>
  <div class="chat">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "chat",
  props: {
    msg: String
  }
};
</script>
