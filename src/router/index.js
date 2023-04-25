import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductList from "@/components/ProductList.vue";

const routes = [
{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Online Store";
  next();
});

router.beforeEach((to, from, next) => {
  const layout = to.meta.layout || "default";
  if (layout === "default") {
    next();
  } else {
    next({ name: "PageWithLayout", params: { layout: layout } });
  }
});

export default router;

