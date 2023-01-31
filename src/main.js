import router from './router'
import './style.css'
import App from './App.vue'
import { createApp } from 'vue'


const app = createApp(App)

app.use(router)

app.mount('#app')
