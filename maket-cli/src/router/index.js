import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
import LinksView from "../views/LinksView.vue";
import ProjectsView from "../views/ProjectsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/links",
    name: "links",
    component: LinksView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
