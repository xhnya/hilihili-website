import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import gloalComponent from '@/components'
import router from './router'
// import {store} from "@/store";
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)

import '@/styles/index.scss'

app.use(gloalComponent)
app.use(Antd)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(store)
app.mount('#app')
