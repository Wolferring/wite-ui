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
        <code v-hljs class="xml">{{code.type}}</code>
      </pre>    
    </div>
    <h3 class="content-head">
      尺寸
    </h3> 
    <div class="demo-button-list">
      <w-button size="mini">Mini按钮</w-button>
      <w-button size="normal">Normal按钮</w-button>
      <w-button size="large">Large按钮</w-button>
    </div>  
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.size}}</code>
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
        <code v-hljs class="xml">{{code.disabled}}</code>
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
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.loading}}</code>
      </pre>    
    </div>      
    <br>
    <br>   
    <h3 class="content-head">
      属性
    </h3>  
    <div class="demo-table">
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>类型</td>
            <td>string</td>
            <td>default/primary/success/danger</td>
            <td>default</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸</td>
            <td>string</td>
            <td>mini/normal/large</td>
            <td>normal</td>
          </tr> 
          <tr>
            <td>disabled</td>
            <td>禁用</td>
            <td>boolean</td>
            <td>true/false</td>
            <td>false</td>
          </tr> 
          <tr>
            <td>loading</td>
            <td>加载状态</td>
            <td>boolean</td>
            <td>true/false</td>
            <td>false</td>
          </tr>                              
        </tbody>
      </table>
    </div>              
  </div>
</template>
<style lang="less">
  .demo-button-list{
    margin: 20px 0;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    .w-button{

    }
  }
</style>
<script>
  import {ref,reactive} from 'vue'
  import {Button} from '@/lib/index'
  export default{
    setup(){
      let code = reactive({})
      code.type = `<w-button>默认按钮</w-button> //自动加上 type=default\n<w-button type="primary">主要按钮</w-button>\n<w-button type="success">成功按钮</w-button>\n<w-button type="danger">警告按钮</w-button>`
      code.size = `<w-button size="mini">Mini按钮</w-button>\n<w-button size="normal">Normal按钮</w-button>\n<w-button size="large">Large按钮</w-button>`
      code.disabled = `<w-button disabled>默认按钮</w-button>\n<w-button type="primary" disabled>主要按钮</w-button>\n<w-button type="success" disabled>成功按钮</w-button>\n<w-button type="danger" disabled>警告按钮</w-button>`
      code.loading = `<w-button loading>默认按钮</w-button>\n<w-button loading type="primary">主要按钮</w-button>\n<w-button loading type="success">成功按钮</w-button>\n<w-button loading type="danger">警告按钮</w-button>`
      return {
        code
      }
    },
    components:{
      "w-button":Button
    }
  }
</script>