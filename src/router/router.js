import {createRouter,createWebHistory} from 'vue-router'
import Intro from '../views/intro.vue'
import About from '../views/about.vue'

import ButtonExample from '../views/buttonExample.vue'
import ModalExample from '../views/modalExample.vue'
import SwitchExample from '../views/switchExample.vue'
import TabExample from '../views/tabExample.vue'
import ImageExample from '../views/imageExample.vue'
import RadioExample from '../views/radioExample.vue'

const routes = [
  { 
    path: '/', 
    redirect: '/intro',
    meta:{
      nav:false
    }
  },
  {
    path:"/intro",
    name:"intro",
    component: Intro,
    meta:{
      nav:true,
      cn:"简介"
    }
  },
  {
    path:"/about",
    name:"about",
    component: About,
    meta:{
      nav:true,
      cn:"关于"
    }
  },  
  {
    path:"/example/button",
    name:"button",
    component: ButtonExample,
    meta:{
      nav:true,
      cn:"按钮组件"
    }
  },
  {
    path:"/example/modal",
    name:"modal",
    component: ModalExample,
    meta:{
      nav:true,
      cn:"模态框组件"
    }
  },
  {
    path:"/example/switch",
    name:"switch",
    component: SwitchExample,
    meta:{
      nav:true,
      cn:"开关组件"
    }
  },
  {
    path:"/example/tab",
    name:"tab",
    component: TabExample,
    meta:{
      nav:true,
      cn:"选项卡组件"
    }
  },
  {
    path:"/example/image",
    name:"image",
    component: ImageExample,
    meta:{
      nav:true,
      cn:"图片组件"
    }
  }, 
  {
    path:"/example/radio",
    name:"radio",
    component: RadioExample,
    meta:{
      nav:true,
      cn:"单选组件"
    }
  },                
]
export const routerHistory = createWebHistory()

export const router = createRouter({
  history:routerHistory,
  routes:routes
})


const dirLog = {
  '': '？',
  back: '⏪',
  forward: '⏩',
}
routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`)
})