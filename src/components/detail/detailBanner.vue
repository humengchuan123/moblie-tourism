<template>
  <div>
     <div class="banner" @click="openGallary">
        <img class="banner-img" :src="bannerImg" alt="">
        <div class="banner-info">
          <div class="banner-title">{{this.sightName}}</div>
          <div class="banner-img-num">
            <span class="iconfont banner-icon">&#xe692;</span>
            33
          </div>
        </div>
     </div>
     <commom-gallary :gallaryImgs="gallaryImgs" v-show="showGallary"
     @close="closeGallary"></commom-gallary>
  </div>
</template>

<script>
import commomGallary from '../../common/gallary'
export default {
    name: 'detailBanner',
  components:{
    commomGallary
  },
  props:{
    sightName: String,
    bannerImg: String,
    gallaryImgs:Array
  },
  data(){
    return {
      showGallary: false
    }
  },
  watch:{},
  computed:{},
  methods: {
     openGallary () {
       this.showGallary = true
     },
     closeGallary () {
       this.showGallary = false
     }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
 .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      width: 100%;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      .banner-title{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-img-num{
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, 0.8);
        font-size: .24rem;
        .banner-icon{
          font-size: .24rem;
        }
      }
    }

 }
</style>