<template>
  <div class="w-tabs">
    <div class="w-tabs-nav-scroll">    
      <div class="w-tabs-nav" ref="container">

        <div class="w-tabs-title" 
          :class="{
            'active':item.name===current.props.name,
            'disabled':item.disabled
          }"
          v-for="(item,index) in titles" 
          :key="index" 
          :ref="
          (el) => {
            if (item.name==current.props.name) selectedItem = el;
            }
          "
          @click="select(item)"
          :title="item.title">
          {{item.title}}
        </div>
        <div class="w-tabs-nav-indicator" ref="indicator">
          
        </div>
      </div> 
    </div>
    <div class="w-tabs-content">
      <component class="w-tabs-content-core" :is="current" :key="current.props.name" />
    </div>
  </div>
</template>
<script>
  import Tab from './Tab.vue'
  import {ref,computed,watchEffect,nextTick} from "vue"
  export default{
    name:"w-tab",
    emits:['update:modelValue','tab-click'],
    props:{
      'modelValue':{

      },
    },    
    setup(props,{slots,emit}){
      const defaults = slots.default()
      const indicator = ref("indicator")
      const container = ref("container")
      const selectedItem = ref(null)
      defaults.forEach((tab) => {
        if (tab.type !== Tab) {
          throw new Error("Tabs 子标签必须为 w-tab-panel");
        }
      });   
      const titles = defaults.map((tab) => {
        return {
          title: tab.props.title,
          name:tab.props.name,
          disabled:(tab.props.disabled || tab.props.disabled === "")
        } 
      })
      const select = async (tab)=>{
        if(!tab.disabled){
          emit("update:modelValue",tab.name)
          await nextTick() //数据和视图改变之后，再出发tab-click事件
          emit("tab-click",current.value)
        }
      }

      const current = computed(() => {
        return defaults.find((tab) => tab.props.name === props.modelValue);
      })

      watchEffect(()=>{
        const tabStyles = window.getComputedStyle(selectedItem.value)
        const {
            width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = (width-parseFloat(tabStyles.paddingLeft) - parseFloat(tabStyles.paddingRight)) + "px";
        const {
            left: containerLeft
        } = container.value.getBoundingClientRect();
        const {
            left: resultLeft
        } = selectedItem.value.getBoundingClientRect();
        const left = resultLeft - containerLeft + parseFloat(tabStyles.paddingLeft);
        indicator.value.style.transform = `translateX(${left}px)`;
      },  {
        flush: 'post'//组件update后再触发watch
      })
      //计算样式
      return {
        defaults,
        titles,
        select,
        current,
        indicator,
        selectedItem,
        container
      }
    }
  }
</script>
<style lang="less">
  .w-tabs{
    .w-tabs-nav-scroll{
      margin-bottom:20px;
    }
    .w-tabs-nav{
      display:flex;
      justify-content:flex-start;
      align-items:center;
      position:relative;
      &:after{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:2px;
        background-color:@border-title;
      }
    }
    .w-tabs-nav-indicator{
      position:absolute;
      height:2px;
      bottom:0;
      z-index: 999;
      left:0;
      background-color:@primary-color;
      transition:all .3s;
      transform:translateX(0);
    }
    .w-tabs-title{
      padding:10px 10px;
      cursor:pointer;
      transition:all .3s;
      font-weight:500;
      font-size:15px;
      &:nth-of-type(0){
        padding-left:0;
      }
      &:first-of-type{
        padding-left:0;
      }
      &.disabled{
        color:@text-disabled;
        cursor:not-allowed;
      }
      &.active{
        color:@primary-color;
      }
    }
  }
</style>