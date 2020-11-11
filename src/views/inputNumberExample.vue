<template>
  <div class="content-view">
    <h2 class="content-title">
      InputNumber数字输入
    </h2>
    <p>在多个选项中进行单选</p>    
    <br>
    <br>
    <h3 class="content-head">
      基本使用
    </h3>      
    <w-input-number max="100" v-model="number1"></w-input-number>
    {{number1}}
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.basic}}</code>
      </pre>    
    </div> 
    <h3 class="content-head">
      步进
    </h3>      
    <w-input-number v-model="number2" step="3"></w-input-number>
    {{number2}}
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.step}}</code>
      </pre>    
    </div>          
    <h3 class="content-head">
      属性
    </h3>  
    <div class="demo-table">
      <table>
        <thead>
          <tr>
            <th width="150">参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>v-model</td>
            <td>当前激活tab的name</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>                                       
        </tbody>
      </table>
    </div> 
    <h3 class="content-head">
      子组件w-tab-panel属性
    </h3>  
    <div class="demo-table">
      <table>
        <thead>
          <tr>
            <th width="150">参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>        
          <tr>
            <td>disabled</td>
            <td>禁用状态</td>
            <td>boolean</td>
            <td>true/false</td>
            <td>false</td>
          </tr>                              
        </tbody>
      </table>
    </div>      
    <h3 class="content-head">
      事件
    </h3>  
    <div class="demo-table">
      <table>
        <thead>
          <tr>
            <th width="150">名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tab-click</td>
            <td>切换tab的回调</td>
            <td>选中的tab的实例</td>
          </tr>                            
        </tbody>
      </table>
    </div>          
  </div>
</template>
<script>
  import {
    reactive,
    ref
  } from 'vue'
  export default{
    setup(){
      let number1 = ref(2)
      let number2 = ref(2)
      let code = reactive({})
      code.basic = `<w-input-number v-model="number1"></w-input-number>`
      code.step = `<w-input-number v-model="number2" step="3"></w-input-number>`
      return{
        number1,
        number2,
        code
      }
    }
  }
</script>