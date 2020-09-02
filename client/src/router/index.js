import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Projects",
    component: Projects
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
