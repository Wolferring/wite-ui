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