<template>
  <div class="content-view">
    <h2 class="content-title">
      Modal 模态框
    </h2>
    <p>常用简单按钮</p>    
    <br>
    <br>
    <h3 class="content-head">
      类型
    </h3>    
    <div class="demo-button-list">
      <w-button type="primary" @click="toggleModalState">v-model打开</w-button>
      <w-button type="primary" @click="$refs.modal.show()">ref打开</w-button>
      
    </div>
    <teleport to="body">
      <w-modal 
        @open="modalStateChange"  
        @close="modalStateChange" 
        :closeOnBlankClick = "modalCloseOnBlankClick"
        ref="modal" 
        v-model:visible="modalState">
        <p>Hello Wite-UI</p>
        <p>{{modalContent}}</p>
        <br>
        <w-button type="primary" @click="$refs.modal.hide()">通过ref关闭</w-button>
        <br>
        <w-button type="primary" @click="modalState = false">通过v-model关闭</w-button>
      </w-modal>
    </teleport>
  </div>
</template>
<script>
import {Button,Modal} from '../lib/index.js'
import {ref,onMounted} from 'vue'
export default{
  setup(){
    const modalState = ref(false)
    const modalCloseOnBlankClick = ref(false)
    const modalContent = ref("Modal Content")

    const toggleModalState = ()=>{
      modalContent.value = new Date().toLocaleString()
      modalState.value = !modalState.value
    }  
    const modalStateChange = (state)=>{
      alert(state.value?"Modal打开":"Modal关闭")
    }
    return {
      modalCloseOnBlankClick,
      modalState,
      modalStateChange,
      modalContent,
      toggleModalState
    }        
  },
  components:{
    "w-modal":Modal,
    "w-button":Button
  }
}
</script>