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
//视频播放组件
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'







const app = createApp(App)

app.use(router)
app.use(VueVideoPlayer)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
