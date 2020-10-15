<template>
  <div class="content-view">
    <h2 class="content-title">
      Switch 开关
    </h2>
    <p>两种对立的状态切换</p>    
    <br>
    <br>
    <h3 class="content-head">
      基本使用
    </h3>      
    <w-switch 
      @change="switchChange" 
      v-model="switchValue1" 
      on-text="英文" 
      off-text="中文"
      ></w-switch>
      「{{switchValue1}}」
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.basic}}</code>
      </pre>    
    </div>       
    <h3 class="content-head">
      自定义value
    </h3>      
    <w-switch 
      @change="switchChange" 
      v-model="switchValue2" 
      on-text="100" 
      off-text="0"
      on-value="100"
      off-value="0"
      ></w-switch>
      「{{switchValue2}}」
    <br>
    <br> 
    <w-switch 
      @change="switchChange" 
      v-model="switchValue3" 
      on-text="英文" 
      off-text="中文"
      on-value="英文"
      off-value="中文"
      ></w-switch>
      「{{switchValue3}}」
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.customize}}</code>
      </pre>    
    </div>              
    <h3 class="content-head">
      禁用状态
    </h3>      
    <w-switch disabled @change="switchChange" v-model="switchValue1" on-text="英文" off-text="中文"></w-switch>
    <div class="highlight">
      <pre>
        <code v-hljs class="xml">{{code.disabled}}</code>
      </pre>    
    </div>    
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
            <td>v-model</td>
            <td>绑定值</td>
            <td>boolean/number/string</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>on-text</td>
            <td>打开文字</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr> 
          <tr>
            <td>off-text</td>
            <td>关闭文字</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>on-value</td>
            <td>打开值</td>
            <td>string/boolean/number</td>
            <td>-</td>
            <td>-</td>
          </tr> 
          <tr>
            <td>off-value</td>
            <td>关闭值</td>
            <td>string/boolean/number</td>
            <td>-</td>
            <td>-</td>
          </tr>           
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
            <th>名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>change</td>
            <td>switch状态发生改变的回调</td>
            <td>新状态的值</td>
          </tr>                            
        </tbody>
      </table>
    </div>          
  </div>
</template>
<script>
  import {Switch} from '../lib/index.js'
  import {
    reactive
  } from 'vue'
  import {
    ref
  } from 'vue'
  export default{
    components:{
      'w-switch':Switch
    },
    setup(){
      const switchValue1 = ref(false)
      const switchValue2 = ref(100)
      const switchValue3 = ref("中文")
      const switchChange = (state)=>{
        console.log(`Switch状态${state}`)
      }


      let code = reactive({})
      code.basic = `<w-switch @change="switchChange" v-model="switchValue1" on-text="英文" off-text="中文"></w-switch>\n「{{switchValue1}}」`
      code.customize = `<w-switch @change="switchChange" v-model="switchValue2" on-text="100" off-text="0" on-value="100" off-value="0"></w-switch>\n「{{switchValue2}}」\n<w-switch @change="switchChange" v-model="switchValue3" on-text="英文" off-text="中文" on-value="英文" off-value="中文"></w-switch>\n「{{switchValue3}}」`
      code.disabled = `<w-switch disabled @change="switchChange" v-model="switchValue1" on-text="英文" off-text="中文"></w-switch>`
      return{
        switchChange,
        switchValue1,
        switchValue2,
        switchValue3,
        code
      }
    }
  }
</script>