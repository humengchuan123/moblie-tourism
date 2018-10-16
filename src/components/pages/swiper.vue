<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showBanner">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
      list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
           el: '.swiper-pagination',
        },
         autoplay: {
           delay: 3000,
           disableOnInteraction: false
         },
        loop: true
       
      }
    }
  },
  computed: {
    showBanner() {
     return this.list.length
    }
  }
}
</script>
<style lang="scss">
.swiper-pagination-bullet-active{
  background: #fff;
}
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.25%;
  // background: #ccc;
 .swiper-img{
  width: 100%;
}
}

</style>