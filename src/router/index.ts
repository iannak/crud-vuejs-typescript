import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/users",
    name: "users",
    component: () => import("../modules/UsersList.vue")
  },
  {
    path: "/users/:id",
    name: "users-details",
    component: () => import("../modules/Edit.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../modules/AddUsers.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;