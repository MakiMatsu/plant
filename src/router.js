import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import Login from "./views/Login.vue";
import SNS from "./views/Sns.vue";

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
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
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
    }
  ]
});
