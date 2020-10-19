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
    <div class="demo-switch-list">
      <p>点击背景关闭</p>
      <w-switch v-model="modalCloseOnBlankClick" ></w-switch>
    </div>
    <div class="demo-button-list">

      <w-button type="primary" @click="toggleModalState">v-model打开</w-button>
      <w-button type="primary" @click="openViaRef">ref打开</w-button>
      
    </div>
    <teleport to="body">
      <w-modal 
        @open="modalStateChange"  
        @close="modalStateChange" 
        title="Hello Modal"
        :closeOnBlankClick = "modalCloseOnBlankClick"
        ref="modal" 
        v-model:visible="modalState">
        <p>Hello Wite-UI</p>
        <p>{{modalContent}}</p>
        <template v-slot:footer>
          <w-button @click="$refs.modal.hide()">通过ref关闭</w-button>&nbsp;
          <w-button type="primary" @click="modalState = false">通过v-model关闭</w-button>
        </template>
      </w-modal>
    </teleport>
  </div>
</template>
<script>
import {ref,onMounted} from 'vue'
export default{
  setup(){
    const modal = ref(null)
    const modalState = ref(false)
    const modalCloseOnBlankClick = ref(false)
    const modalContent = ref("Modal Content")

    const toggleModalState = ()=>{
      modalContent.value = new Date().toLocaleString()
      modalState.value = !modalState.value
    }  
    const modalStateChange = (state)=>{
      console.log(state.value?"Modal打开":"Modal关闭")
    }
    const openViaRef = ()=>{
      modal.value.show()
    }
    return {
      modal,
      modalCloseOnBlankClick,
      modalState,
      modalStateChange,
      openViaRef,
      modalContent,
      toggleModalState
    }        
  }
}
</script>