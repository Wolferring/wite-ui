<template>
  <div class="w-switch" :class="checkboxClass" @click="toggleSwitch">
    <input 
      :value="modelValue" 
      :checked="checkState" 
      type="checkbox" 
      :true-value="true" 
      class="w-switch-input"
      >
    <span v-if="offText.length" class="w-switch-label w-switch-label-left">{{offText}}</span>
    <span class="w-switch-dot"></span>
    <span class="w-switch-label w-switch-label-right" v-if="onText.length" >
      {{onText}}
    </span>

  </div>
</template>
<style lang="less" scoped>
  .w-switch{
    display:inline-flex;
    align-items:center;
    position:relative;
    line-height:20px;
    height:20px;
    cursor:pointer;
    user-select:none;

    .w-switch-input{
      display:none;
    }
    .w-switch-label{
      font-weight:500;
      transition:all .3s;
      &-left{
        padding-right: 10px;
        color:@primary-color;
      }
      &-right{
        padding-left: 10px;
      }      
    }
    .w-switch-dot{
      box-shadow:0px 0px 5px #ddd;
      position:relative;
      display:inline-block;
      width:40px;
      height:100%;
      border-radius:20px;
      background-color:@danger-color;
      transition:all .3s;
      &:before{
        content:"";
        position:absolute;
        display:inline-block;
        width:14px;
        height:14px;
        background-color:#fff;
        border-radius:8px;
        border:1px solid #dedede;
        top:2px;
        left:2px;
        transition:all .3s ease;
      }
    }
    &.is-checked{
      .w-switch-label{
        &-left{
          color:inherit;
        }
        &-right{
          color:@primary-color;
        }      
      }
      .w-switch-dot{
        background-color:@success-color;

        &:before{
          left:100%;
          margin-left:-19px;
        }
      }
    }
    &.is-disabled{
      cursor:not-allowed;
      color:#ccc;
      .w-switch-dot{
        filter: opacity(70%);
      }
      .w-switch-label{
        &-left{
          // color:inherit;
        }
        &-right{
          // color:inherit;
        }      
      }      
    }    
  }
</style>
<script>
  import {toRefs,onMounted,computed,nextTick} from 'vue'
  export default{
    name:"w-switch",
    emits:['update:modelValue','change'],
    props:{
      'modelValue':{

      },
      'onText':{
        type:String
      },
      'offText':{
        type:String
      },
      'onColor':{
        type:String
      },
      'offColor':{
        type:String
      },
      'onValue':{
        type:[String,Number,Boolean],
        default:true
      },      
      'offValue':{
        type:[String,Number,Boolean],
        default:false
      },
      'disabled':{
        type:Boolean,
        default:false
      }
    },
    setup(props,{emit}){
      const propsRef = toRefs(props)

      const checkState = computed(()=>{
        return propsRef.modelValue.value==propsRef.onValue.value
      })

      const checkboxDisabled = propsRef.disabled
      onMounted(()=>{
        
      })

      const checkboxClass = computed(()=>{
        return {
          'is-checked':checkState.value,
          'is-disabled':checkboxDisabled.value,
        }
      })
      const toggleSwitch = async ()=>{
        if(!checkboxDisabled.value){
          let changeValue = checkState.value?propsRef.offValue.value:propsRef.onValue.value
          emit("update:modelValue",changeValue)
          await nextTick() //数据和视图改变之后，再出发change事件
          emit("change",changeValue)
        }
      }
      return {
        checkState,
        checkboxDisabled,
        checkboxClass,
        toggleSwitch
      }
    }
  }
</script>