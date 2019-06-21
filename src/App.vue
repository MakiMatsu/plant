<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/chat">Chat</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/sns">SNS</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import SideMenu from "@/components/SideMenu";
export default {
  name: "app",
  components: {
    // SideMenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
