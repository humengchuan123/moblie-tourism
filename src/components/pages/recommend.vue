<template>
  <div>
     <!-- <transition name="fade"> -->
      <div class="title">热销推荐</div>
      <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" 
        v-for="item of list" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p class="item-desc">{{item.desc}}</p>
             <button class="item-btn">查看详情</button>
          </div>
        </router-link>
      </ul>
      <!-- </transition> -->
  </div>
</template>

<script>
export default {
  props:{
    list: Array
  },
  data(){
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/mixins";
  .title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title{
        line-height: .54rem;
        font-size: .32rem;
        @include ellipsis;
      }
      .item-desc{
        line-height: .4rem;
        color: #cccccc;
        @include ellipsis;
      }
      .item-btn{
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
 
</style>