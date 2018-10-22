<template>
  <div class="search-wrapper">
      <input type="text" class="search-input" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
 
  name: 'search',
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/veribles";
.search-wrapper{
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;
    .search-input{
        width: 100%;
        height: .62rem;
        padding: 0 .1rem;
        line-height: .62rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
        box-sizing: border-box;
    } 
}
</style>