import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    }
  ]
});

export default router;
