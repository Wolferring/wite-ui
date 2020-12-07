<template>
  <div class="w-image" :class="$attrs.class" :style="$attrs.style">
    <slot v-if="loading" name="placeholder">
      <div class="w-image-placeholder">加载中</div>
    </slot>    
    <img 
      v-else
      v-bind="attrs" 
      class="w-image-core" 
      :src="sourceUrl" 
      :style="imageStyle">
  </div>
</template>
<script>
  import { useAttr } from './hook/index.js'
  import { on, off, getScrollContainer, isInContainer } from './util/dom.js'
  import { computed,ref ,onMounted, watch,reactive,getCurrentInstance} from "vue"
  export default{
    name:"w-img",
    inheritAttrs: false,
    emits:['load'],
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
      },
      lazy:{
        type:Boolean,
        default:false
      },
      scrollContainer: {}
    },
    setup(props,{emit}){
      let show = ref(false)
      const loading = ref(true)
      const attrs = useAttr()
      const sourceUrl = computed(()=>{
        return props.src
      })
      watch(sourceUrl,()=>{
        loadImage()
      })
      const loadImage = ()=>{
        const attributes = attrs.value
        loading.value = true
        const img = new Image()
        img.onload = e=>{
          handleImageLoad(e,img)
        }
        Object.keys(attributes)
        .forEach(key=>{
          const value = attributes[key]
          img.setAttribute(key,value)
        })
        img.src = sourceUrl.value
      }
      const handleImageLoad = (ev,img)=>{
        loading.value = false
        emit("load",ev)
      }
      const imageStyle = computed(()=>{
        return {
          objectFit:props.fit
        }
      })

      watch(show,()=>{
        if(show.value){
          loadImage()
        }
      })

      const instance = getCurrentInstance()
      let selfScrollContainer = null, selfLazyLoadHandler = null
      const addLazyLoadListner = ()=>{
        const {scrollContainer} = props
        let _scrollContainer = null

        if(typeof(scrollContainer) == "string"){
          _scrollContainer = document.querySelector(scrollContainer)
        }else{
          _scrollContainer = getScrollContainer(instance.ctx.$el)

        }
        if (_scrollContainer) {
          selfScrollContainer = _scrollContainer;
          selfLazyLoadHandler = handleLazyLoad;
          on(_scrollContainer, 'scroll', selfLazyLoadHandler);
          handleLazyLoad();
        }

      }
      const handleLazyLoad = ()=>{
        if (isInContainer(instance.ctx.$el,selfScrollContainer)) {
          show.value = true;
          // this.removeLazyLoadListener();
        }    
      }
      onMounted(()=>{

        if(props.lazy){
          addLazyLoadListner()
        }else{
          loadImage()
        }
      })
      return {
        sourceUrl,
        loading,
        attrs,
        imageStyle
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