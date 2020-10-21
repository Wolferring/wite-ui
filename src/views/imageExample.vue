<template>
  <div class="content-view">
    <h2 class="content-title">
      Tab 开关
    </h2>
    <p>分隔不同类别的数据集合。</p>    
    <br>
    <br>
    <h3 class="content-head">
      基本使用
    </h3>      
    <w-img style="width: 100px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="fill"></w-img>
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
    reactive
  } from 'vue'
  import {
    ref
  } from 'vue'
  export default{
    setup(){

      let activeTab = ref('first')
      const tabClick = (tab)=>{
        console.log(`选中tab`)
        console.log(tab)
      }


      let code = reactive({})
      code.basic = `<w-tab v-model="activeTab" @tab-click="tabClick">\n  <w-tab-panel title="基本" name="first" >1</w-tab-panel>\n  <w-tab-panel title="语言设置" disabled name="second" >2</w-tab-panel>\n  <w-tab-panel title="SEO设置" name="third" >3</w-tab-panel>\n</w-tab>`
      return{
        activeTab,
        tabClick,
        code
      }
    }
  }
</script>