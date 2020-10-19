import {default as Button} from './Button.vue'
import {default as Modal} from './Modal.vue'
import {default as Switch} from './Switch.vue'

const wite = {}
const components = [
  Button,
  Modal,
  Switch
]

components.forEach(item=>{
  item.install = (Vue)=>{
    Vue.component(item.name,item)
  }
})

wite.install = (Vue,opts = {})=>{

  Vue.provide('$wite',{
    size:opts.size||''
  })
  //全局注入配置文件


  components.forEach(item=>{
    Vue.component(item.name,item)
  })
}
export {
  Button,
  Modal,
  Switch
}
export default wite