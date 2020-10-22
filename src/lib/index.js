import {reactive,ref} from "vue"

import {default as Button} from './Button.vue'
import {default as Modal} from './Modal.vue'
import {default as Switch} from './Switch.vue'
import {default as Tab} from './Tabs.vue'
import {default as TabPanel} from './Tab.vue'
import {default as Image} from './Image.vue'
import {default as Radio} from './Radio.vue'
import {default as RadioButton} from './RadioButton.vue'
import {default as RadioGroup} from './RadioGroup.vue'

const wite = {}
const components = [
  Button,
  Modal,
  Switch,
  Tab,
  TabPanel,
  Image,
  Radio,
  RadioButton,
  RadioGroup  
]

components.forEach(item=>{
  item.install = (Vue)=>{
    Vue.component(item.name,item)
  }
})

wite.install = (Vue,opts = {})=>{
  let isDark = ref(false)
  if (window&&window.matchMedia ) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      isDark.value = true
    }
    window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', event => {
      if (event.matches) {
        isDark.value = true
      } else {
        isDark.value = false
      }
    })      
  }
  //监听暗黑模式切换
  /*
      size:全局尺寸
      isDark:暗黑模式开启标志
  */

  Vue.provide('$wite',reactive({
    size:opts.size||'',
    isDark:isDark
  }))



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