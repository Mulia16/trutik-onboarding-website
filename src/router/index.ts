import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register/index.vue";
import Home from "../views/HomeView.vue";
import StepAccountRegister from "../views/Register/StepAccount.vue";
import StepPersonalRegister from "../views/Register/StepPersonal.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/register/account",
    },
    {
      path: "/register",
      name: "regiter",
      component: Register,
      redirect: "/register/account",
      children: [
        {
          path: "account",
          component: StepAccountRegister,
        },
        {
          path: "personal",
          component: StepPersonalRegister,
        },
      ],
    },
  ],
});

export default router;
