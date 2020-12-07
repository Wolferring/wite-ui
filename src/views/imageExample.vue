<template>
  <div class="content-view">
    <h2 class="content-title">
      Image
    </h2>
    <p>图片组件，slot待完成，懒加载待完成</p>    
    <br>
    <br>
    <h3 class="content-head">
      基本使用
    </h3>  
    <div class="flex-start">
      <w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="fill"></w-img>
      <w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="contain"></w-img> 
      <w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="cover"></w-img>          
      <w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="none"></w-img>
      <w-img lazy class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="scale-down"></w-img>          
    </div>    
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
            <td>src</td>
            <td>图片链接地址</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr> 
          <tr>
            <td>fit</td>
            <td>图片适应方式，同object-fit</td>
            <td>string</td>
            <td>fill/contain/cover/none/scale-down</td>
            <td>-</td>
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
            <td>load</td>
            <td>图片加载完成回调</td>
            <td>Event</td>
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
      code.basic = `<w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="fill"></w-img>\n<w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="contain"></w-img> \n<w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="cover"></w-img>          \n<w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="none"></w-img>\n<w-img class="demo-image" style="width: 50px;height: 100px;" src="https://v3.vuejs.org/logo.png" fit="scale-down"></w-img>`
      return{
        activeTab,
        tabClick,
        code
      }
    }
  }
</script>
<style>
  .demo-image{
    margin-right: 10px;
    border: 1px solid #dedede;
  }
</style>