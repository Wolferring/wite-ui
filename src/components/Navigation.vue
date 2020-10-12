<template>
  <div class="navigation">
    <div class="navigation-top">
      <h4>Wite-UI</h4>
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
      <router-link class="navigation-link" to="/intro">Dialog</router-link>
      <router-link class="navigation-link" to="/about">Switch</router-link> 
      <router-link class="navigation-link" to="/about">Tabs</router-link>            
    </div>
  </div>
</template>
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
    padding:20px 0;
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
      padding:20px;
      padding-left:30px;
      transition:all .3s ease;
      &.router-link-active{
        background-color:#fff;
      }
      &:hover{
        background-color:#fefefe;
      }
    }
  }
</style>