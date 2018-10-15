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
  }
}
</script>
<style></style>