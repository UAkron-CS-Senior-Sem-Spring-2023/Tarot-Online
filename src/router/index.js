// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "@/views/HomePage.vue";
// import ProductList from "@/components/ProductList.vue";
// import LandingPage from '@/views/LandingPage.vue'


// const routes = [
// {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/products",
//     name: "Products",
//     component: Products,
//   },
//   {
//     path: "/checkout",
//     name: "Checkout",
//     component: Checkout,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || "Online Store";
//   next();
// });

// router.beforeEach((to, from, next) => {
//   const layout = to.meta.layout || "default";
//   if (layout === "default") {
//     next();
//   } else {
//     next({ name: "PageWithLayout", params: { layout: layout } });
//   }
// });

// export default router;

// import Vue from 'vue';
// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "@/views/HomePage.vue";
// import ProductList from "@/components/ProductList.vue";
//import Checkout from '@/views/CheckOut.vue';


 //Vue.use(createRouter);

// const routes = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: HomePage
//   },
//   {
//     path: '/products',
//     name: 'Products',
//     component: ProductList
//   },
//   {
//     path: '/checkout',
//     name: 'Checkout',
//     component: Checkout
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// });

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || 'Online Store';
//   next();
// });

// export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "@/views/HomePage.vue";
// import ProductList from "@/components/ProductList.vue";
// import Vue from 'vue';

// Vue.use();

// const routes = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: HomePage
//   },
//   {
//     path: '/products',
//     name: 'Products',
//     component: ProductList
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// });

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || 'Online Store';
//   next();
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductList from "@/components/ProductList.vue";
import CheckOut from '@/views/CheckOut.vue';

import { createApp } from 'vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductList
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckOut
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Online Store';
  next();
});

const app = createApp({});
app.use(router);
app.mount('#app');

export default router;

