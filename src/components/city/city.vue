<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
  </div>
</template>

<script>
import cityHeader from '../city/cityHeader'
import citySearch from '../city/search'
import cityList from '../city/list'
export default {
   name: 'city',
  data () {
    return {
    }
  },
  components:{
    cityHeader,
    citySearch,
    cityList
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

</style>