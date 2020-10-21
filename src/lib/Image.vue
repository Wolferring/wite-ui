<template>
  <div class="w-image">
    <img v-bind="$attrs" class="w-image-core" :src="sourceUrl" :style="{objectFit:fit}">
  </div>
</template>
<script>
  import { computed } from "vue"
  export default{
    name:"w-img",
    props:{
      src:{
        type:String,
        default:""
      },
      fit:{
        type:String,
        default:"fill",
        validator: function (value) {
          // 这个值必须匹配下列字符串中的一个
          return ['fill', 'contain', 'cover', 'none', 'scale-down'].indexOf(value) !== -1
        }         
      }
    },
    setup(props,context){
      const sourceUrl = computed(()=>{
        return props.src
      })
      console.log(context)
      return {
        sourceUrl
      }
    }
  }
</script>
<style lang="less">
  .w-image{
    .w-image-core{
      height:100%;
      width:100%;
      vertical-align: top;
    }
  }
</style>