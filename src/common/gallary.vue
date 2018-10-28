<template>
  <div class="gallay-wrapper" @click="clickGallary">
      <div class="content">
        <swiper :options="swiperOption">
        <!-- slides -->
            <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
        <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props:{
      gallaryImgs: {
          type: Array,
          default () {
              return []
          }
      }
  },
  data(){
    return {
       swiperOption: {
           pagination: {
           el: '.swiper-pagination',
           type: 'fraction',
        },
           paginationType: 'fraction',
           observeParents: true,
           observer: true
       } 
    }
  },
  watch:{},
  computed:{},
  methods: {
      clickGallary () {
          this.$emit('close')
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.gallay-wrapper /deep/ .swiper-container{
    overflow: inherit;
}
.gallay-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    z-index: 99;
    .content{
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        .swiper-img{
            width: 100%;
        }
       .swiper-pagination{
           color: #fff;
           bottom: -1rem;
       } 

    }
}
</style>