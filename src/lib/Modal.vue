<template>
  <transition name="dialog-fade">
    <div v-if="visible" class="w-modal" @click.self = "modalClick">
      <div class="w-modal-container">
        <div class="w-modal-title">
          {{title}}
        </div>
        <div class="w-modal-content">
          <slot></slot>
        </div>
        <div class="w-modal-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {ref,toRefs,watch} from 'vue'
  export default {
    name:"w-modal",
    emits: [ "close","open","update:visible"],
    props: {
      title:{
        type:String
      },
      visible:{
        type:Boolean
      },
      closeOnBlankClick:{
        type:Boolean,
        default: true,
        required:false,
      }
    },
    setup(props,{emit}){
      //内部调用emit的时候，可以使用context中的emit方法
      let closed = ref(false)
      const { closeOnBlankClick,visible,title } = toRefs(props)
      const modalClick = ()=>{

        if(closeOnBlankClick.value){
          hide()
        }
      }
      const hide = ()=>{
        emit('update:visible',false)
        closed.value = true
      }
      const show = ()=>{
        emit('update:visible',true)
        closed.value = false
      }
      watch(visible,(newValue)=>{
        if(newValue){
          emit('open',visible)
          closed.value = false
        }else{
          emit('close',visible)
          closed.value = true
        }
      })

      return {
        hide,
        show,
        closed,
        modalClick
      }
    }
  }
</script>
<style lang="less">
.dialog-fade-enter-active {
    animation: dialog-fade-in .3s
}

.dialog-fade-leave-active {
    animation: dialog-fade-out .3s
}

@keyframes dialog-fade-in {
    0% {
        transform: translate3d(0,0px,0);
        opacity: 0
    }

    to {
        transform: translateZ(0);
        opacity: 1
    }
}

@keyframes dialog-fade-out {
    0% {
        transform: translateZ(0);
        opacity: 1
    }

    to {
        transform: translate3d(0,0px,0);
        opacity: 0
    }
}

  .w-modal{
    display:flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    backdrop-filter:blur(10px);
    .w-modal-container{
      background-color:#fff;
      min-width:400px;
    }
    .w-modal-title{
      padding:20px 20px;
      border-bottom:1px solid @border-title;
      user-select:none;
    }
    .w-modal-content{
      padding:20px;
    }
    .w-modal-footer{
      display: flex;
      justify-content:flex-end;
      align-items:center;
      padding:20px;
    }
  }
</style>