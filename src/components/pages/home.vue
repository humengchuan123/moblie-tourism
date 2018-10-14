<template>
	<div>
		<home-header></home-header>
    <home-swiper></home-swiper>
	</div>
</template>

<script>
import homeHeader from '../pages/homeheader'
import homeSwiper from '../pages/swiper'
export default {

  name: 'home',

  data () {
    return {

    }
  },
  components: {
  	homeHeader:homeHeader,
    homeSwiper:homeSwiper
  }
}
</script>
<style></style>