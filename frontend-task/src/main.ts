import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const pinia = createPinia()




// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap";



createApp(App).use(pinia,router).mount('#app')
