<template>
  <div class="navigation">
    <div class="navigation-top">
      <div class="flex-row">
        <img src="@/assets/logo.png" class="navigation-logo" alt="">
        <h4>Wite-UI</h4>
        <a href="https://github.com/Wolferring/wite-ui" target="_blank">
          Github
          <svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
        </a>
      </div>
      <br>
      <Search :list="navs" @choose="searchChoose"></Search>
    </div>
    <div class="navigation-title">
      <p>开始</p>
    </div>    
    <div class="navigation-list">
      <router-link class="navigation-link" to="/intro">简介</router-link>
      <router-link class="navigation-link" to="/about">关于</router-link>
    </div>    
    <div class="navigation-title">
      <p>组件</p>
    </div>
    <div class="navigation-list">
      <router-link class="navigation-link" to="/example/button">Button</router-link>
      <router-link class="navigation-link" to="/example/switch">Switch</router-link> 
      <router-link class="navigation-link" to="/example/modal">Modal</router-link>
      <router-link class="navigation-link" to="/example/">Tabs</router-link>            
    </div>
  </div>
</template>
<script>
  import {useRouter} from 'vue-router'
  import {
    onMounted,
    computed
  } from 'vue'
  import Search from '../components/Search.vue'
  export default{
    components:{
      Search,
    },
    setup(){
      const routes = useRouter()
      const navs = computed(()=>{
        return routes.options.routes.filter(nav=> nav.meta.nav);
      })
      onMounted(()=>{
        console.log(navs.value)
      })
      const searchChoose = (param)=>{
        routes.push(param.path)
      }
      return {
        navs,
        searchChoose
      }
    }
  }
</script>
<style lang="less" scoped>
  .navigation{
    box-shadow: 0px 0px 15px #ccc;
    background-color:#eaeaea;
    background-image:url('../assets/back-2.jpeg'),linear-gradient(to right, #e6e6e6, transparent);
    background-size: contain;
    background-repeat:no-repeat;
    background-position: bottom left;
  }
  .navigation-top{
    padding:15px 10px;
    h4{
      font-size:20px;
      line-height: 30px;
    }
  }
  .navigation-logo{
    display:inline-block;
    width:100%;
    max-width:30px;
    vertical-align:middle;
  }
  .navigation-title{
    padding:10px 0;
    padding-left:20px;
    border-bottom:1px solid #dedede;
    margin-bottom: 10px;
    p{
      font-size: 18px;
      font-weight: bold;
    }
  }
  .navigation-list{
    display:flex;
    flex-direction:column;
    text-align:left;
    .navigation-link{
      height:50px;
      line-height:50px;
      padding-left:30px;
      transition:all .3s ease;
      background-color:transparent;

      &.router-link-active{
        background-color:#fff;
        box-shadow:0 0 10px #ddd;

      }
      &:hover{
        background-color:#fefefe;
        box-shadow:0 0 20px #ccc;
      }
    }
  }
</style>