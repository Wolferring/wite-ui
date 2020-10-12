<template>
  <div class="content-view">
    <p>简介</p>
    <button class="" @click="toggleModalState">MODAL</button>
    {{modalState}}
    <teleport to="body">
      <Modal v-model:visible="modalState" >
        <p>Hello Whismy</p>
        <p>{{modalContent}}</p>
      </Modal>
    </teleport>
  </div>
</template>
<script>
import Modal from '@/components/Modal.vue'
import {ref,onMounted} from 'vue'

export default{
  setup(){
    const modalState = ref(false)
    const modalContent = ref("Modal Content")

    const toggleModalState = ()=>{
      modalContent.value = new Date().toLocaleString()
      modalState.value = !modalState.value
    }  
    return {
      modalState,
      modalContent,
      toggleModalState
    }        
  },
  components:{
    Modal
  }
}
</script>