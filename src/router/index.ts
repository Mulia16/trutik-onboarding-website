import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register/index.vue";
import StepAccountRegister from "../views/Register/StepAccount.vue";
import StepPersonalRegister from "../views/Register/StepPersonal.vue";
import StepVerificationRegister from "../views/Register/StepVerification.vue";
import StepCreationRegister from "../views/Register/StepCreation.vue";

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
        {
          path: "verification",
          component: StepVerificationRegister,
        },
        {
          path: "creation",
          component: StepCreationRegister,
        },
      ],
    },
  ],
});

export default router;
