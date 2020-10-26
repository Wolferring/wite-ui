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
    <w-input-number step="2" v-model="radio1"></w-input-number>
    {{radio1}}
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.basic}}</code>
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
      let radio1 = ref(2)
      let radio2 = ref("2")
      let radio3 = ref("4")
      let code = reactive({})
      code.basic = `<w-radio v-model="radio1" label="1">选项1</w-radio>\n<w-radio v-model="radio1" label="2">选项2</w-radio>`
      code.group = `<w-radio-group v-model="radio3">\n  <w-radio  label="1">选项1</w-radio>\n  <w-radio  label="2">选项2</w-radio>\n  <w-radio disabled label="3">选项3</w-radio>\n  <w-radio  label="4">选项4</w-radio>\n</w-radio-group>`
      code.button = `<w-radio-group v-model="radio2">\n  <w-radio-button  label="1">选项1</w-radio-button>\n  <w-radio-button  label="2">选项2</w-radio-button>\n  <w-radio-button disabled  label="3">选项3</w-radio-button>\n  <w-radio-button  label="4">选项4</w-radio-button>\n</w-radio-group>`
      return{
        radio1,
        radio2,
        radio3,
        code
      }
    }
  }
</script>