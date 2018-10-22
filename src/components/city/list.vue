<template>
  <div class="wrapper-list" ref="wrapper">
      <div>
            <div class="area">
                <div class="title boder-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrap">
                        <div class="button">成都</div>
                    </div>
                
                    <div class="button-wrap">
                        <div class="button">成都</div>
                    </div>
                
                    <div class="button-wrap">
                        <div class="button">成都</div>
                    </div>
                </div>
            </div>
            <div class="area">
                    <div class="title boder-topbottom">热门城市</div>
                    <div class="button-list">
                    <div class="button-wrap">
                        <div class="button">成都</div>
                    </div>
                    
                    <div class="button-wrap">
                        <div class="button">北京</div>
                    </div>
                            
                    <div class="button-wrap">
                        <div class="button">上海</div>
                    </div>
                                
                    <div class="button-wrap">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title boder-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                </div>
            </div>
            <div class="area">
                <div class="title boder-topbottom">B</div>
                <div class="item-list">
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                    <div class="item border-bottom">广州</div>
                </div>
            </div>
            <div class="area">
            <div class="title boder-topbottom">C</div>
            <div class="item-list">
                <div class="item border-bottom">广州</div>
                <div class="item border-bottom">广州</div>
                <div class="item border-bottom">广州</div>
                <div class="item border-bottom">广州</div>
                <div class="item border-bottom">广州</div>
            </div>
        </div>
       </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/veribles";
.boder-topbottom{
    &:before{
        border-color: #ccc;
    }
    &:after{
        border-color: #ccc;
    }
}
.border-bottom{
    &:before{
        border-color: #ccc;
    }
}
.wrapper-list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
        line-height: .54rem;
        background: #eee;
        padding-left: .2rem;
        color: #666;
        font-size: .26rem;
    }
    .button-list{
        overflow: hidden;
        padding: .1rem .1rem .1rem .1rem;
        .button-wrap{
            float: left;
            width: 33.33%;
            .button{
            margin: .1rem;
            padding: .1rem 0;
            text-align: center;
            border: .02rem solid #ccc;
            border-radius: .06rem;
            }
        }
        
    }
    .item-list{
        .item{
            line-height: .76rem;
            padding-left: .2rem;
        }
    }
}
</style>