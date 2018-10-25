<template>
	<div>
		<home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-wenkend :list="weekendList"></home-wenkend>
	</div>
</template>

<script>
import homeHeader from '../pages/homeheader'
import homeSwiper from '../pages/swiper'
import homeIcon from '../pages/icons'
import homeRecommend from '../pages/recommend'
import homeWenkend from '../pages/wenkend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {

  name: 'home',

  data () {
    return {
    lastCity: '',
    swiperList: [],
    iconList:[],
    recommendList:[],
    weekendList:[]
    }
  },
  components: {
  	homeHeader:homeHeader,
    homeSwiper:homeSwiper,
    homeIcon:homeIcon,
    homeRecommend:homeRecommend,
    homeWenkend:homeWenkend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.$store.state.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.$store.state.city
    this.getHomeInfo()
  },
  activated () {
       if (this.lastCity !== this.$store.state.city) {
           this.getHomeInfo()
           this.lastCity = this.$store.state.city
       }
  }
}
</script>
<style></style>