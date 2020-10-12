<template>
  <button class="w-button" :class="buttonClass" :disabled="disabled||loading">
    <span v-if="loading" class="w-button-loading" ></span>
    <slot></slot>
  </button>
</template>
<style lang="less" scoped>
.w-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
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
  border-radius: 4px;  
  &:hover,&:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;   
  }
  &:active{
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;    
  }
  &.is-disabled{
    cursor:not-allowed;
  }
  &.is-loading{
    pointer-events:none;
  }

}
.w-button-loading{
  margin-right:5px;
  &:before{
    content:"";
    display:inline-block;
    width:10px;
    height: 10px;
    background-image:url('../assets/spinner.png');
    background-size:cover;
    animation: rotation 1s linear infinite;
  }
}
@keyframes rotation{
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }  
}
.w-button-type-default{
  &.is-disabled{
    background-color: #fefefe; 
    color:#c0c4cc;  
  }  
}
.w-button-type-primary{
  background-color:@primary-color;
  color:#fff;
  border-color:@primary-color;
  &:hover,&:focus{
    color:#fff;
    border-color: @primary-color;
    background-color: lighten(@primary-color, 10%);   
  }
  &:active{
    color: #fff;
    border-color: darken(@primary-color, 35%);   
    background-color: darken(@primary-color, 10%);   

  }  
  &.is-disabled{
    background-color: lighten(@primary-color, 15%);   
  }
}
.w-button-type-danger{
  background-color:@danger-color;
  color:#fff;
  border-color:@danger-color;
  &:hover,&:focus{
    color:#fff;
    border-color: @danger-color;
    background-color: lighten(@danger-color, 10%);   
  }
  &:active{
    color: #fff;
    border-color: darken(@danger-color, 35%);   
    background-color: darken(@danger-color, 10%);   
  }  
  &.is-disabled{
    background-color: lighten(@danger-color, 15%);   
  }  
}
.w-button-type-success{
  background-color:@success-color;
  color:#fff;
  border-color:@success-color;
  &:hover,&:focus{
    color:#fff;
    border-color: @success-color;
    background-color: lighten(@success-color, 10%);   
  }
  &:active{
    color: #fff;
    border-color: darken(@success-color, 35%);   
    background-color: darken(@success-color, 10%);   

  }
  &.is-disabled{
    background-color: lighten(@success-color, 15%);   
  } 
}
</style>
<script>
import {toRefs,computed} from 'vue'
export default{
  name:"w-button",
  props:{
    size:{
      type:String,
      default:'normal'
    },
    type:{
      type:String,
      default:'default',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['default','primary','success', 'danger'].indexOf(value) !== -1
      }      
    },
    disabled: {
      type: Boolean,
      default: false
    },    
    loading:{
      type:Boolean,
      default:false
    }
  },
  setup(props){ 
    const {
      type,
      size,
      disabled,
      loading
    } = toRefs(props)

    const buttonClass = computed(()=>{
      return {
        [`w-button-type-${type.value}`]:type.value,
        [`w-button-size-${size.value}`]:size.value,
        ['is-disabled']:disabled.value,
        ['is-loading']:loading.value
      }
    })

    return {
      buttonClass
    }
  }
}
</script>