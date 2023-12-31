import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ListAnimaisView from "@/views/ListAnimaisView.vue";
import DetailView from "@/views/DetailView.vue";
import BlogView from "@/views/BlogView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/listanimais",
      name: "listanimais",
      component: ListAnimaisView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
  ],
});

export default router;
