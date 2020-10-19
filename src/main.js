import { createApp } from 'vue'
import App from './App.vue'
import hljs from 'vue3-hljs'
import './assets/highlight/styles/atelier-savanna-light.css'
import wite from './lib/index.js'
// import SubApp from './SubApp.vue'
import {router} from './router/router.js'
import '@/assets/style.less'
const mainApp = createApp(App)

mainApp.use(wite,{
  size:"mini"
})
mainApp.use(hljs)
mainApp.use(router)
mainApp.mount('#app')
export default mainApp
//这里的mainApp是一个单独的实例
// const subApp = createApp(SubApp)

// subApp.mount('#sub-app')
