<template>
  <div class="warpper">
      <router-link tag="div" to="/" class="header-back" v-show="shopAbs">
         <div class="iconfont header-back-icon">&#xe624;</div>
      </router-link>
      <div class="header-fixed" v-show="!shopAbs" :style="opacityStyle">
        <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情</div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  props:{},
  data(){
    return {
      shopAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  watch:{},
  computed:{},
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1?1 : opacity
        this.opacityStyle = { opacity }
        this.shopAbs = false
      } else {
        this.shopAbs = true
      }
    }
  },
  mounted () {
     window.addEventListener('scroll',this.handleScroll)
  },
  unmounted () {
      window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/veribles";
.wrapper{
  position: relative;
}
.header-back{
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: .4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  .header-back-icon{
    color: #fff;
    font-size: .4rem;
  }
}
  .header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #fff;
    font-size: .32rem;
    background: $bgColor;
    z-index: 9;
    .header-fixed-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }

  }
</style>