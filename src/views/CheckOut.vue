 <!-- This is the checkout page vue component -->
 
 <template>
    <div class="auth-container">
    <div class="checkout">
      <h1>Checkout Page</h1>
      <div class="products">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.title" />
          <h2>{{ product.title }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Category: {{ product.category }}</p>
          <p>{{ product.description }}</p>
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
      <Cart :cartItems="cart" />
    </div>
    </div>
  </template>
  
  <script>
  import { supabase } from "@/supabase";
  import Cart from "./ShopCart.vue";
  
  export default {
    components: {
      Cart,
    },
    data() {
      return {
        products: [],
        cart: [],
      };
    },
    methods: {
      addToCart(product) {
        this.cart.push(product);
      },
    },
    async created() {
      try {
        const { data, error } = await supabase.from("product").select("*");
        if (error) {
          console.error("Error fetching products:", error);
        } else {
          this.products = data;
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
  }
  .auth-container {
    /* display: flex; */
    /* flex-direction: row;
    align-items: center;
    justify-content: center; */
    height: 100vh;
    background-image: url('https://www.transparenttextures.com/patterns/diagmonds-light.png');
  }
  
  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .add-to-cart {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .add-to-cart:hover {
    background-color: #0056b3;
  }
  
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  </style>
  <!-- <template>
    <div class="auth-container">
      <div class="checkout">
        <h1>Checkout Page</h1>
        <div class="products">
          <div class="product" v-for="product in products" :key="product.id">
            <img :src="product.image_url" :alt="product.title" />
            <h2>{{ product.title }}</h2>
            <p>Price: ${{ product.price }}</p>
            <p>Category: {{ product.category }}</p>
            <p>{{ product.description }}</p>
            <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
        <Cart :cartItems="cart" />
      </div>
    </div>
  </template>
  
  <script>
  import { supabase } from "@/supabase";
  import Cart from "./ShopCart.vue";
  
  export default {
    components: {
      Cart,
    },
    data() {
      return {
        products: [],
        cart: [],
      };
    },
    methods: {
      addToCart(product) {
        this.cart.push(product);
      },
    },
    async created() {
      try {
        const { data, error } = await supabase.from("product").select("*");
        if (error) {
          console.error("Error fetching products:", error);
        } else {
          this.products = data.map((product) => ({
            ...product,
            image_url: product.image.url, // assuming your Supabase product table has a column named "image" that stores the image file
          }));
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
  }
  .auth-container {
    height: 100vh;
    background-image: url("https://www.transparenttextures.com/patterns/diagmonds-light.png");
  }
  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .add-to-cart {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .add-to-cart:hover {
    background-color: #0056b3;
  }
  
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  </style>
   -->