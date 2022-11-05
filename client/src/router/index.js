import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    //About
    {
      path: "/about-us",
      name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
    },

    //Academics
    {
      path: "/academics",
      name: "academics",
      component: () => import("../views/Academics.vue"),
    },

    //Admission
    {
      path: "/admission",
      name: "admission",
      component: () => import("../views/Admission.vue"),
    },

       //Event
    {
      path: "/event",
      name: "event",
      component: () => import("../views/Event.vue"),
    },

    //Gallery
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/Gallery.vue"),
    },

    //Contact
    {
      path: "/contact-us",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },

    //404 Page
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
});

export default router;
