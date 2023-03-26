import router from './router'
import './style.css'
import App from './App.vue'
import {createApp} from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(ElementPlus)
app.mount('#app')
