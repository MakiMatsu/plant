<template>
  <div class="sidemenue">
    <router-link to="/">Home</router-link>|
    <router-link to="/chat">Chat</router-link>|
    <router-link to="/login">Login</router-link>|
    <router-link to="/sns">SNS</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/howtogrow">HowToGrow</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: "sidemenu",
  components: {
    SideMenu
  }
};
</script>
