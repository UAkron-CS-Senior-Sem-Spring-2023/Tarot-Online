<template>
  <div id="app">
    <HeaderLayout title="Tarot Online" />
    <HomePage />
    <router-view />
  </div>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import HomePage from "@/views/HomePage.vue";
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase";

export default {
  name: "App",
  components: {
    HeaderLayout,
    HomePage,
  },
  setup() {
    const products = ref([]);
    onMounted(async () => {
      const { data } = await supabase.from("product").select();
      products.value = data;
    });
    return { products };
  },
};
</script>
