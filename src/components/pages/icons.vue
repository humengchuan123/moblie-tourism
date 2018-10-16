<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
           <div class="icon-img-warp">
              <img class="icon-img" :src="item.imgUrl" alt="">
           </div>
           <p class="icon-name">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    </swiper>
    
  </div>
</template>

<script>
export default {
  props: {
     list:Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
     pages () {
       const pages = []
       this.list.forEach((item,index) => {
         const page = Math.floor(index / 8)
         if(!pages[page]) {
           pages[page] = []
         }
         pages[page].push(item)
       })
       return pages
     }
  }

}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/mixins";
.icons-wrapper{
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  .icon{
    position: relative;
    overflow: hidden;
    height: 0;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    .icon-img-warp{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .08rem;
        .icon-img{
          display: block;
          margin: 0 auto;
          height: 100%;
        }
    }
    .icon-name{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .54rem;
      line-height: .44rem;
      text-align: center;
      color: #333;
      @include ellipsis;
    } 
  }
}
</style>