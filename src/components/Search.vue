<template>
  <div class="search-container">
    <input type="text" @focus="focused = true" @blur="focused = false" v-model="query" :class="{'is-focused':focused}" placeholder="搜索导航">
    <transition>
      <div class="search-result-container" v-show="focused">
        <div class="search-result-list">
          <div class="search-item" v-for="(item,key) in queryList" :key="key" @mousedown.stop.prevent="resultClick(item)">
            <span>{{item.meta.cn}}</span>
            <small>{{item.name}}</small>
          </div>
          <div class="search-item" v-if="queryList.length==0">
            <small>没有结果～</small>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="less" scoped>
  .search-container{
    position:relative;
    width:100%;
    input{
      width:100%;
      border-radius:5px;
      padding-left:10px;
      border:1px solid @primary-color;
      line-height:2;
      outline: none;
      &.is-focused{
        border-radius:5px 5px 0px 0px; 
        border-bottom-color:transparent;
      }
    }
    .search-result-container{
      position:absolute;
      left:0;
      width:100%;
    }
    .search-result-list{
      width:100%;
      background-color:#fff;
      border:1px solid @primary-color;
      border-top:none;
      border-radius: 0 0 5px 5px;
      max-height: 200px;
      overflow:auto;
      .search-item{
        padding:15px 10px;
        cursor:pointer;
        display:flex;
        justify-content:space-between;
        align-items:center;
        small{
          color:#999;
          font-size:12px;
          text-transform:uppercase;
        }
        &:hover{
          background-color:lighten(@primary-color,20%);
        }
      }
    }
  }
</style>
<script>
  import {ref,toRefs,computed} from 'vue'
  export default{
    name:"search",
    props:{
      list:{
        type:Array
      }
    },
    emits:['choose'],
    setup(props,{emit}){
      const query = ref('')
      const focused = ref(false)
      const {list} = toRefs(props)
      const queryList = computed(()=>{
        return list.value.filter((item)=>{
          return (item.name.indexOf(query.value)!=-1||item.meta.cn.indexOf(query.value)!=-1)
        })
      })
      
      const resultClick = (param)=>{
        emit("choose",param)
      }
      return {
        focused,
        resultClick,
        query,
        queryList
      }
    }
  }
</script>