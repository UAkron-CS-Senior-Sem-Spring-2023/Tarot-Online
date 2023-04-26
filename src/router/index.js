import { createRouter, createWebHistory } from "vue-router";

import ProductList from "@/components/ProductList.vue";
import CheckOut from '@/views/CheckOut.vue';
import AppLogin from '@/views/AppLogin.vue';
import AppSignUp from '@/views/AppSignUp.vue';



import { createApp } from 'vue';

const routes = [
  
  {
    path: '/products',
    name: 'Products',
    component: ProductList
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckOut
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  },
  {
    path: '/signup',
    name: 'signup',
    component: AppSignUp
  },
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

