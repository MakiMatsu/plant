<template>
  <div class="chat">
    <Chat msg="this is plant chat page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from "@/components/Chat.vue";

export default {
  name: "chat",
  components: {
    Chat
  }
};
</script>
