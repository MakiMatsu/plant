import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import Login from "./views/Login.vue";
import SNS from "./views/Sns.vue";
import About from "./views/About.vue";
import HowToGrow from "./views/HowToGrow.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/sns",
      name: "sns",
      component: SNS
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/howtogrow",
      name: "howtogrow",
      component: HowToGrow
    }
  ]
});
