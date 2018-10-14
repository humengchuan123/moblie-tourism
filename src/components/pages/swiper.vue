<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: {
           el: '.swiper-pagination',
        },
        loop: true
      },
      swiperList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      },{
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg'
      }]
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
  padding-bottom: 31.25%;
  // background: #ccc;
 .swiper-img{
  width: 100%;
}
}

</style>