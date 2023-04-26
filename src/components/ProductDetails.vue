<template>
    <div class="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import supabase from '../supabase'
  
  export default {
    props: {
      productId: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const product = ref(null)
  
      const fetchProduct = async () => {
        const { data, error } = await supabase
          .from('product')
          .select('*')
          .eq('id', props.productId)
          .single()
        if (error) {
          console.log(error)
        } else {
          product.value = data
        }
      }
  
      const addToCart = () => {
        console.log('Added to cart:', product.value)
      }
  
      fetchProduct()
  
      return { product, addToCart }
    }
  }
  </script>
  