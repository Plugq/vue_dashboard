import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "",
    component: () => import("../views/Bar.vue"),
    children: [
      {
        path: "about", // เปลี่ยนจาก "/about" เป็น "about"
        name: "about",
        component: () => import("../views/About.vue"),
      },
      {
        path: "me", // เปลี่ยนจาก "/me" เป็น "me"
        name: "me",
        component: () => import("../views/me.vue"),
      },
      {
        path: "",
        name: "homepage",
        component: () => import("../views/homepage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
