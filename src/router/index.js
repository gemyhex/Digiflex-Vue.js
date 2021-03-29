import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import TvShows from "../views/TvShows.vue";
import Blog from "../views/Blog.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies
  },
  {
    path: "/tvshows",
    name: "tvshows",
    component: TvShows
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
