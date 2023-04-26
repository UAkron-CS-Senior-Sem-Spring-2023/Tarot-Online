<template>
    <div>
      <!-- <h1>Welcome to our Online Store!</h1> -->
      <div class="product-cards" v-if="products">
        <div v-for="product in products" :key="product.id">
          <div class="product-card">
            <img :src="product.image_url" alt="">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading products...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { supabase } from "@/supabase";
  
  export default {
    name: "HomePage",
    setup() {
      const products = ref(null);
  
      const loadProducts = async () => {
        const { data: productsData } = await supabase.from("product").select("*");
        products.value = productsData;
      };
  
      onMounted(() => {
        loadProducts();
      });
  
      const addToCart = () => {
        // implement adding product to cart
      };
  
      return {
        products,
        addToCart,
      };
    },
  };
  </script>
  
  <style>
  .product-cards {
    display: flex;
    flex-wrap: wrap;
  }
  
  .product-card {
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    width: 300px;
    text-align: center;
  }
  
  .product-card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
  }
  </style>
