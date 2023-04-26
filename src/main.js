// Imports for App component and the vue router which allows us to have different routes to different pages

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
