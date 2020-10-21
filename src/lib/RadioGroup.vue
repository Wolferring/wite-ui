<template>
  <div class="w-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  import {provide,toRefs} from "vue"
  export default{
    name:"w-radio-group",
    emits:['update:modelValue'],
    props:{
      modelValue:{

      }
    },
    setup(props,{emit}){
      const propsRef = toRefs(props)
      const radioClick = (radio)=>{
        if(!radio.disabled){
          emit("update:modelValue",radio.label)
        }
      }
      provide("radioClick",radioClick)
      provide("radioModelValue",propsRef.modelValue)

    }

  }
</script>
<style lang="less">
  .w-radio-group{
    .w-radio{
      margin-right: 10px;
    }
  }
</style>