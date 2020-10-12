import {createRouter,createWebHistory} from 'vue-router'
import Intro from '../views/intro.vue'
import About from '../views/about.vue'

import ButtonExample from '../views/buttonExample.vue'

const routes = [
  { path: '/', redirect: '/intro' },
  {
    path:"/intro",
    name:"intro",
    component: Intro
  },
  {
    path:"/about",
    name:"about",
    component: About
  },  
  {
    path:"/example/button",
    name:"button",
    component: ButtonExample
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