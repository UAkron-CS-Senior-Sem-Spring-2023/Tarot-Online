<!-- The App vue component needed in every vue project -->

<template>
  <div id="app">
    <HeaderLayout title="Tarot Online" />
    
    <router-view />
  </div>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";

import { ref, onMounted } from "vue";
import { supabase } from "@/supabase";

export default {
  name: "App",
  components: {
    HeaderLayout,
    
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
