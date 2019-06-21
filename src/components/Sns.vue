<template>
  <div class="sns">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "sns",
  props: {
    msg: String
  }
};
</script>
