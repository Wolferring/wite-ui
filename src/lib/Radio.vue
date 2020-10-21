<template>
  <label class="w-radio" 
    :class="{
      'is-checked':computedModelValue===label,
      'is-disabled':disabled
    }" 
    @click="radioDefaultClick">
    <span class="w-radio-input">
      <span class="w-radio-indicator"></span>
      <input :value="computedModelValue" type="radio" class="w-radio-core">
    </span>
    <span class="w-radio-label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import {inject,computed} from "vue"
  export default{
    name:"w-radio",
    emits:['update:modelValue'],
    props:{
      modelValue:{

      },
      label:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    setup(props,{emit,attrs}){
      const radioGroupClick = inject('radioClick',false)   
      const radioModelValue = inject('radioModelValue',null) 
      const radioDefaultClick = ()=>{
        if(radioGroupClick){
          radioGroupClick(props)
        }else{
          emit('update:modelValue',props.label)
        }
      }
      const computedModelValue = computed(()=>{
        if(radioGroupClick){
          return radioModelValue.value
        }
        return props.modelValue
      })
      return {
        radioDefaultClick,
        computedModelValue
      }
    }
  }
</script>
<style lang="less">
  .w-radio{
    cursor:pointer;
    display:inline-flex;
    align-items:center;
    .w-radio-indicator{
      display: inline-block;    
      position: relative;
      vertical-align:middle;
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      cursor: pointer;
      transition:all .1s;
      &:after{
        content:"";
        position:absolute;
        width:4px;
        height:4px;
        border-radius:100%;
        background-color:#fff;
        top:50%;
        left:50%;
        transition:all .3s;
        transform: translate(-50%,-50%) scale(0);
      }
    }
    &.is-disabled{
      cursor:not-allowed;
      opacity:0.7;
    }
    &.is-checked{
      .w-radio-indicator{
        background-color:@primary-color;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
      .w-radio-label{
        color:@primary-color;
        font-weight:500;
      }      
    }
    .w-radio-label{
      margin-left:5px;
    }
    .w-radio-core{
      display:none;
    }
  }
</style>