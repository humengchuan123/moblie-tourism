<template>
	<div>
		<home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
	</div>
</template>

<script>
import homeHeader from '../pages/homeheader'
import homeSwiper from '../pages/swiper'
import homeIcon from '../pages/icons'
import axios from 'axios'
export default {

  name: 'home',

  data () {
    return {

    }
  },
  components: {
  	homeHeader:homeHeader,
    homeSwiper:homeSwiper,
    homeIcon:homeIcon
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style></style>