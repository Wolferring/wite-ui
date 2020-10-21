<template>
  <div class="w-tab-pane" :class="{'disabled':disabled}">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name:"w-tab-panel",
    props:{
      disabled:{
        type:Boolean,
        default:false
      }
    }
  }
</script>