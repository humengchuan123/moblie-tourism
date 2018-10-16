<template>
	<div>
		<home-header :city="city"></home-header>
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
export default {

  name: 'home',

  data () {
    return {
    city: '',
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
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      console.log(res)
      if(res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style></style>