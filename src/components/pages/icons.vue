<template>
  <div class="icons-wrapper">
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  data () {
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
.icons-wrapper{
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  background: yellow;
  .icon{
    float: left;
    width: 25%;
    padding-bottom: 25%;
  }
}
</style>