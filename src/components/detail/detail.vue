<template>
  <div>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" 
      :gallaryImgs="gallaryImgs"
      ></detail-banner> 
      <detail-header></detail-header>
       <div class="content">
      <detail-list :list="list"></detail-list>
      </div>
      
  </div>
</template>

<script>
import detailHeader from '../detail/detailHeader'
import detailBanner from '../detail/detailBanner'
import detailList from '../detail/detailList'
import axios from 'axios'
export default {
    name: "detail",
  components:{
    detailHeader,
    detailBanner,
    detailList
  },
  props:{},
  data(){
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list:[]
    }
  },
  watch:{},
  computed:{},
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?+', {
        params: { id:this.$route.params.id }
        }).then( this.getDetailInfoSucc )
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  created(){},
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="scss" scoped>
.content{
  // height: 20rem;
}
</style>