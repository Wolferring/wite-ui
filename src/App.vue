<template>
  <div class="main-container">
    <Navigation id="navigation" :expand="expand"></Navigation>
    <router-view id="main-router-view"></router-view>
  </div>

</template>

<script>
import Navigation from './components/Navigation.vue'
import {ref,onMounted,computed,onBeforeMount,provide} from 'vue'
//ref让变量变成响应式的

export default {
  setup(){
    const expand = ref(false)
    const DARKMODE = ref(false)
    onBeforeMount(()=>{
      if (window.matchMedia ) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          DARKMODE.value = true
        }
        window.matchMedia('(prefers-color-scheme: dark)')
              .addEventListener('change', event => {
          if (event.matches) {
            DARKMODE.value = true
          } else {
            DARKMODE.value = false
          }
        })      
      }
    })
    onMounted(()=>{

    })
    provide('DARKMODE',computed(()=>{return this.DARKMODE}))
    return {
      expand,
      DARKMODE
    }
  },
  provide(){
    return {
      'DARKMODE':computed(()=>{return this.DARKMODE})
    }
  },
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style lang="less">
#app {
  font-family:Pingfang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100vh;
  overflow:hidden;
}
.main-container{
  display:flex;
  height:100%;
  overflow: hidden;
  justify-content:flex-start;
  align-items: flex-start;
}
#main-router-view{
  height:100%;
  flex:1;
  overflow:auto;
  padding:0 120px;
}
#navigation{
  flex:0 0 300px;
  height:100%;
  overflow:auto;
}
</style>
