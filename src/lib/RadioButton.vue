<template>
  <label class="w-radio-button" 
    :class="{
      'is-checked':radioModelValue===label,
      'is-disabled':disabled
    }" 
    @click="radioButtonClick">
    <span class="w-radio-input">
      <input 
        :value="radioModelValue" 
        type="radio" 
        class="w-radio-core">
    </span>
    <div class="w-radio-button-core">
      <slot></slot>
    </div>
  </label>
</template>
<script>
  import {inject} from "vue"
  export default{
    name:"w-radio-button",
    emits:['radio-click'],
    props:{
      label:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    setup(props,{emit}){
      const radioClick = inject('radioClick')    
      const radioModelValue = inject('radioModelValue')  
      const radioButtonClick = ()=>{
        radioClick(props)
      }
      return {
        radioButtonClick,
        radioModelValue
      }
    }
  }
</script>
<style lang="less">
  .w-radio-button{
    cursor:pointer;
    display:inline-flex;
    align-items:center;
    background-color:#fff;
    border: 1px solid #dcdfe6;
    border-right:0;
    overflow:hidden;
    &:last-of-type{
      border-radius:0px 5px 5px 0;
      border-right:1px solid #dcdfe6;
    }
    &:first-of-type{
      border-radius:5px 0px 0px 5px;
    }        
    .w-radio-input{
      display: none;    
    }
    &.is-checked{
      background-color:@primary-color;
      color:#fff;    
    } 
    &.is-disabled{
      cursor:not-allowed;
      opacity:0.7;
    }    
    .w-radio-label{
      margin-left:5px;
    }
    .w-radio-button-core{
      display: inline-block;
      height:auto;
      line-height: 1;
      white-space: nowrap;
      background: transparent;
      color: inherit;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 10px 16px;
      font-size: 14px;

    }
  }
</style>