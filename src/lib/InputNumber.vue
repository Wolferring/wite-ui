<template>
  <div class="w-input-number">
    <span class="w-input-number-label w-input-number-label-decrease" @click="decrease">-</span>
    <input type="text" 
    class="w-input"
    @input="handleInputChange" 
    @change="handleInputChange"
    :value="displayValue">
    <span class="w-input-number-label w-input-number-label-increase" @click="increase" >+</span>

  </div>
</template>
<style lang="less">
  .w-input-number{
    display:inline-flex;
    align-items:center;
    border:1px solid @border-title;
    border-radius:5px;
    height:40px;
    line-height: 40px;
    overflow:hidden;
   .w-input-number-label{
    display:block;
    line-height:38px;
    padding:0 20px;
    cursor:pointer;
    user-select:none;
    font-size: 18px;
    &:hover{
      background-color: @primary-color;
      color:#fff;
    }
    &:active{
      box-shadow: 0px 0px 5px #666 inset;
    }    
   } 
   .w-input{
    border:none;
    text-align: center;
    flex:0 0 80px;
    width:80px;
    height:100%;
    line-height:38px;
   }
  }
</style>
<script>
  import {computed,ref,watch,toRefs} from "vue"
  export default{
    name:"w-input-number",
    emits:['update:modelValue','input','change'],
    props:{
      "modelValue":{},
      "step":{
        type:[Number,String],
        default:1
      },
      "strict":{
        type:Boolean,
        default:false
      }
    },
    setup(props,{emit}){
      let currentValue = ref(0)
      let userInput = ref(null)
      const propsRef = toRefs(props)

      let displayValue = computed(()=>{
        if(userInput.value!==null){
          return userInput.value
        }
        return currentValue.value
      })
      const increase = ()=>{
        let step = Number(propsRef.step&&propsRef.step.value)||1
        setCurrentValue(currentValue.value+step)
      }
      const decrease = ()=>{
        let step = Number(propsRef.step&&propsRef.step.value)||1
        setCurrentValue(currentValue.value-step)
      }
      const setCurrentValue = (newVal)=>{
        const oldVal = currentValue.value;
        // if (newVal >= this.max) newVal = this.max;
        // if (newVal <= this.min) newVal = this.min;
        if (oldVal === newVal) return;
        userInput.value = null;
        emit('input', newVal);
        emit('change', newVal, oldVal);
        emit('update:modelValue', newVal);
        currentValue.value = newVal;        
      }
      const handleInput = (dom)=>{
        userInput.value = dom.target.value
      }
      const handleInputChange = (dom)=>{
        const newVal = dom.target.value === '' ? undefined : Number(dom.target.value);
        if (!isNaN(newVal) || dom.target.value === '') {
          setCurrentValue(newVal);
        }
        userInput.value = null;
      }  

      watch(propsRef.modelValue,(newValue)=>{
        setCurrentValue(newValue)

      },{
        immediate:true
      })          
      return {
        displayValue,
        handleInput,
        handleInputChange,
        increase,
        decrease
      }
    }
  }
</script>