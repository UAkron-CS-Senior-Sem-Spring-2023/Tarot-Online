 <!-- <template>
    <div>
      <h1>Welcome to our Online Store!</h1> -->
      <!-- <div class="product-cards" v-if="products">
        <div v-for="product in products" :key="product.id">
          <div class="product-card">
            <img :src="product.image_url" alt="">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div> -->
      <!-- </div>
      <div v-else>
        <p>Loading products...</p>
      </div> -->
    <!-- </div>
  </template>
  
  <script>
  // import { ref, onMounted } from "vue";
  // import { supabase } from "@/supabase";
  
  // export default {
  //   name: "HomePage",
  //   setup() {
  //     const products = ref(null);
  
  //     const loadProducts = async () => {
  //       const { data: productsData } = await supabase.from("product").select("*");
  //       products.value = productsData;
  //     };
  
  //     onMounted(() => {
  //       loadProducts();
  //     });
  
  //     const addToCart = () => {
  //       // implement adding product to cart
  //     };
  
  //     return {
  //       products,
  //       addToCart,
  //     };
  //   },
  // };
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
  </style> --> 

  <!-- <template>
    <div>
      <button id="Future,Past,PresentButton" @click="futurePastPresent">Future, Past, Present</button>
      <button id="LoveButton" @click="love">Love</button>
      <button id="CareerButton" @click="career">Career</button>
      <p v-if="output">{{ output }}</p>
    </div>
  </template>
  <script>
   import { createClient } from '@supabase/supabase-js';
  //import { supabase } from "@/supabase";
  
  export default {
    data() {
      return {
        output: '',
        button1: null,
        button2: null,
        button3: null,
        outputEl: null,
        supabase: createClient('https://ldeqdetkgejadnyobnji.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZXFkZXRrZ2VqYWRueW9ibmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0MDAzMDksImV4cCI6MTk5Njk3NjMwOX0.hM1BMNrdpMpUNL1zEgfvcHjkrAPKhagxKdpANrYmgBM'),
      };
    },
    mounted() {
      this.button1 = document.getElementById('Future,Past,PresentButton');
      this.button2 = document.getElementById('LoveButton');
      this.button3 = document.getElementById('CareerButton');
      this.outputEl = document.getElementById('output');
  
      this.button1.addEventListener('click', this.futurePastPresent);
      this.button2.addEventListener('click', this.love);
      this.button3.addEventListener('click', this.career);
    },
    methods: {
      async futurePastPresent() {
        let pastCall = this.getReading('Past');
        let card = this.generateRandom(78);
        const { data, error } = await this.supabase
          .from('meanings')
          .select(pastCall)
          .eq('ID', card)
          .single();
  
        if (error) {
          console.error(error);
        } else {
          if (pastCall.substring(11) == '"Past Upright"') {
            console.log(data.Card_Name, data['Past Upright']);
          }
          if (pastCall.substring(11) == '"Past Reversed"') {
            console.log(data.Card_Name, data['Past Reversed']);
          }
        }
  
        let presentCall = this.getReading('Present');
        card = this.generateRandom(78);
        const { data: data2, error: error2 } = await this.supabase
          .from('meanings')
          .select(presentCall)
          .eq('ID', card)
          .single();
  
        if (error2) {
          console.error(error2);
        } else {
          if (presentCall.substring(11) == '"Present Upright"') {
            console.log(data2.Card_Name, data2['Present Upright']);
          }
          if (presentCall.substring(11) == '"Present Reversed"') {
            console.log(data2.Card_Name, data2['Present Reversed']);
          }
        }
  
        let futureCall = this.getReading('Future');
        card = this.generateRandom(78);
        const { data: data3, error: error3 } = await this.supabase
        .from('meanings')
          .select(futureCall)
          .eq('ID', card)
          .single();
  
        if (error3) {
          console.error(error3);
        } else {
          if (futureCall.substring(11) == '"Future Upright"') {
            console.log(data3.Card_Name, data3['Future Upright']);
          }
          if (futureCall.substring(11) == '"Future Reversed"') {
            console.log(data3.Card_Name, data3['Future Reversed']);
          }
        }
  
        this.output = `Past: ${data['Past Upright']} Present: ${data2['Present Upright']} Future: ${data3['Future Upright']}`;
      },
  
      async love() {
        let loveCall = this.getReading('Love');
        let card = this.generateRandom(78);
        const { data, error } = await this.supabase
          .from('meanings')
          .select(loveCall)
          .eq('ID', card)
          .single();
  
        if (error) {
          console.error(error);
        } else {
          if (loveCall.substring(11) == '"Love Upright"') {
            console.log(data.Card_Name, data['Love Upright']);
          }
          if (loveCall.substring(11) == '"Love Reversed"') {
            console.log(data.Card_Name, data['Love Reversed']);
          }
        }
  
        this.output = data['Love Upright'];
      },
  
      async career() {
        let careerCall = this.getReading('Career');
        let card = this.generateRandom(78);
        const { data, error } = await this.supabase
          .from('meanings')
          .select(careerCall)
          .eq('ID', card)
          .single();
  
        if (error) {
          console.error(error);
        } else {
          if (careerCall.substring(11) == '"Career Upright"') {
            console.log(data.Card_Name, data['Career Upright']);
          }
          if (careerCall.substring(11) == '"Career Reversed"') {
            console.log(data.Card_Name, data['Career Reversed']);
          }
        }
  
        this.output = data['Career Upright'];
      },
  
      generateRandom(max) {
          return Math.floor(Math.random() * Math.floor(max)) + 1;
        },
  
        getReading(type) {
          let readingType = type;
          let orientation = Math.random() < 0.5 ? 'Upright' : 'Reversed';
          return `"${readingType} ${orientation}"`;
        },
      },
    };
    </script>
   -->

   <template>
    <div>
      <button @click="futurePastPresent">Future, Past, Present</button>
      <button @click="love">Love</button>
      <button @click="career">Career</button>
      <p v-if="output">{{ output }}</p>
    </div>
  </template>
  
  <script>
  import { createClient } from '@supabase/supabase-js';
  
  export default {
    data() {
      return {
        output: null,
        supabase: createClient('https://ldeqdetkgejadnyobnji.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZXFkZXRrZ2VqYWRueW9ibmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0MDAzMDksImV4cCI6MTk5Njk3NjMwOX0.hM1BMNrdpMpUNL1zEgfvcHjkrAPKhagxKdpANrYmgBM'),
      };
    },
    methods: {
      async futurePastPresent() {
        let pastCall = this.getReading('Past');
        let card = this.generateRandom(78);
        const { data, error } = await this.supabase
          .from('meanings')
          .select(pastCall)
          .eq('ID', card)
          .single();
  
        if (error) {
          console.error(error);
        } else {
          if (pastCall.substring(11) == '"Past Upright"') {
            console.log(data.Card_Name, data['Past Upright']);
          }
          if (pastCall.substring(11) == '"Past Reversed"') {
            console.log(data.Card_Name, data['Past Reversed']);
          }
        }
  
        let presentCall = this.getReading('Present');
        card = this.generateRandom(78);
        const { data: data2, error: error2 } = await this.supabase
          .from('meanings')
          .select(presentCall)
          .eq('ID', card)
          .single();
  
        if (error2) {
          console.error(error2);
        } else {
          if (presentCall.substring(11) == '"Present Upright"') {
            console.log(data2.Card_Name, data2['Present Upright']);
          }
          if (presentCall.substring(11) == '"Present Reversed"') {
            console.log(data2.Card_Name, data2['Present Reversed']);
          }
        }
  }

  let futureCall = this.getReading('Future'),
  card = this.generateRandom(78),
  const { data: data3, error: error3 } = await this.supabase
    .from('meanings')
    .select(futureCall)
    .eq('ID', card)
    .single(),

  if (error3) {
    console.error(error3);
  } else {
    if (futureCall.substring(11) == '"Future Upright"') {
      console.log(data3.Card_Name, data3['Future Upright']);
    }
    if (futureCall.substring(11) == '"Future Reversed"') {
      console.log(data3.Card_Name, data3['Future Reversed']);
    }
  }
}
async love() {
  let loveCall = this.getReading('Love');
  let card = this.generateRandom(78);
  const { data, error } = await this.supabase
    .from('meanings')
    .select(loveCall)
    .eq('ID', card)
    .single();

  if (error) {
    console.error(error);
  } else {
    if (loveCall.substring(11) == '"Love Upright"') {
      console.log(data.Card_Name, data['Love Upright']);
    }
    if (loveCall.substring(11) == '"Love Reversed"') {
      console.log(data.Card_Name, data['Love Reversed']);
    }
  }
}

async career() {
  let careerCall = this.getReading('Career');
  let card = this.generateRandom(78);
  const { data, error } = await this.supabase
    .from('meanings')
    .select(careerCall)
    .eq('ID', card)
    .single();

  if (error) {
    console.error(error);
  } else {
    if (careerCall.substring(11) == '"Career Upright"') {
      console.log(data.Card_Name, data['Career Upright']);
    }
    if (careerCall.substring(11) == '"Career Reversed"') {
      console.log(data.Card_Name, data['Career Reversed']);
    }
  }
}
generateRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
getReading(reading) {
  switch (reading) {
    case 'Past':
      return 'meanings."Past Upright", meanings."Past Reversed"';
    case 'Present':
      return 'meanings."Present Upright", meanings."Present Reversed"';
    case 'Future':
      return 'meanings."Future Upright", meanings."Future Reversed"';
    case 'Love':
      return 'meanings."Love Upright", meanings."Love Reversed"';
    case 'Career':
      return 'meanings."Career Upright", meanings."Career Reversed"';
    default:
      return '';
  }
}
  }
