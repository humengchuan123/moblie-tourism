<template>
  <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
      <city-alphbet :cities="cities" @change="leterChange"></city-alphbet>
  </div>
</template>

<script>
import cityHeader from '../city/cityHeader'
import citySearch from '../city/search'
import cityList from '../city/list'
import cityAlphbet from '../city/ALphbet'
import axios from 'axios'
export default {
   name: 'city',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components:{
    cityHeader,
    citySearch,
    cityList,
    cityAlphbet
  },
  watch:{},
  computed:{},
  methods:{
    getCityInfo () {
      axios.get('/api/city.json').then(
        this.getCityInfoSucc
      )
    },
      getCityInfoSucc (res) {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
      },
      leterChange (letter) {
           this.letter = letter
      }
   
  },
  created(){},
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="scss" scoped>

</style>