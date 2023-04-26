<template>
    <div class="product-card">
      <div class="product-image">
        <img :src="product.image_url" :alt="product.name" />
      </div>
      <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="product-description">{{ product.description }}</div>
        <div class="product-price">${{ product.price }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
    max-width: 50%
  }
  
  .product-image img {
    max-width: auto;
    height: auto;
  }
  
  .product-name {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .product-description {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .product-price {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0;
  }
  </style>
  