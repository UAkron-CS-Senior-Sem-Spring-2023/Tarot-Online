   <template>
    <div class="product-list">
      <h1>Products</h1>
      <div class="product-container">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from "@/components/ProductCard.vue";
  import { ref, onMounted } from "vue";
  import { supabase } from "@/supabase";
  
  export default {
    name: "ProductList",
    components: {
      ProductCard,
    },
    setup() {
      const products = ref([]);
  
      onMounted(async () => {
        try {
          const { data: productsData, error } = await supabase.from("product").select("*");
          if (error) throw error;
          products.value = productsData;
        } catch (error) {
          console.log("Error fetching products:", error.message);
        }
      });
  
      return { products };
    },
  };
  </script>
  