<template>
  <div class="content-view">
    <div class="content-intro">
      <h2 class="content-title">
        简介
      </h2>
      <p>框架本身基于Vue3.0 + Vue-router4.0 + LESS</p>
      <p>Vue 3.0 推出也有一段时间了，尝试造一些轮子来学习新的Composition API和新特性，借鉴了element-ui中间一些模块的思路</p>
      <p>通过这个轮子，对Vue3的一些大的变动有了一定的理解，做的同时也学习了很多element-ui中对于组件化开发的规划</p>
      <p>没有用vuex的原因是想要更深入地理解组件之间的值传递，所以会使用比较多的Provide/Inject来做数据传递。</p>
      <p>没有用TypeScript的原因是，我确实没在工程实践中使用过，这也会加入后续学习的路径中。</p>
      <p>暂时没有上传到NPM，感觉做的东西太简陋了，全当自娱自乐</p>
      <h2 class="content-title">
        起步
      </h2>  
      <pre>
        <code v-hljs class="js">import { createApp } from 'vue'
import wite from './lib/index.js'
const mainApp = createApp(App)

mainApp.use(wite,{
  size:"mini"
})    
mainApp.mount('#app')
export default mainApp</code>
      </pre>   
    </div>
  </div>
</template>
<style lang="less" scoped>
.content-view{
  .content-intro{
    p{
      margin:20px 0;
      font-size:16px;
    }
  }
  
}
</style>
<script>
import {ref} from 'vue'

export default{
  setup(){
 
    return {
      
    }        
  },
  components:{
    
  }
}
</script>