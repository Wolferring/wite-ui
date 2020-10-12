<template>
  <div class="content-view">
    <h2 class="content-title">
      Button 按钮
    </h2>
    <p>常用简单按钮</p>
    <br>
    <br>
    <h3 class="content-head">
      类型
    </h3>
    <div class="demo-button-list">
      <w-button>默认按钮</w-button>
      <w-button type="primary">主要按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button type="danger">警告按钮</w-button>
    </div>  
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.default}}</code>
      </pre>    
    </div>
    <h3 class="content-head">
      尺寸
    </h3> 
    <div class="demo-button-list">
      <w-button>默认按钮</w-button>
      <w-button type="primary">主要按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button type="danger">警告按钮</w-button>
    </div>  
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.default}}</code>
      </pre>    
    </div>      
    <h3 class="content-head">
      禁用状态
    </h3> 
    <div class="demo-button-list">
      <w-button disabled>默认按钮</w-button>
      <w-button type="primary" disabled>主要按钮</w-button>
      <w-button type="success" disabled>成功按钮</w-button>
      <w-button type="danger" disabled>警告按钮</w-button>
    </div>   
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.default}}</code>
      </pre>    
    </div>     
    <h3 class="content-head">
      加载状态
    </h3>   
    <div class="demo-button-list">
      <w-button loading>默认按钮</w-button>
      <w-button loading type="primary">主要按钮</w-button>
      <w-button loading type="success">成功按钮</w-button>
      <w-button loading type="danger">警告按钮</w-button>
    </div>             
  </div>
</template>
<style lang="less">
  .demo-button-list{
    margin: 20px 0;
    .w-button{
      margin-right: 15px;
    }
  }
</style>
<script>
  import {ref,reactive} from 'vue'
  import {Button} from '@/lib/index'
  export default{
    setup(){
      let code = reactive({})
      code.default = `<w-button>默认按钮</w-button>\n<w-button type="primary">主要按钮</w-button>\n<w-button type="success">成功按钮</w-button>\n<w-button type="danger">警告按钮</w-button>`
      return {
        code
      }
    },
    components:{
      "w-button":Button
    }
  }
</script>