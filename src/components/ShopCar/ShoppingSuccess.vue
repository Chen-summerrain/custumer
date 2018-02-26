<template>
  <div class="shoppingSuccess">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <div class="contentBox shoppingSuccessContent">
      <div class="sh-s-c-img">
        <icon type="success" is-msg></icon>
      </div>
      <div class="sh-s-c-bottom">
        <span @click="handleLookMyOrder">查看订单</span>
        <span @click="handleBackHome">返回首页</span>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Icon } from 'vux'
export default {
  components: {
    XHeader,
    Icon
  },
  data () {
    return {
      headerTitle:''
    }
  },
  methods:{
    handleLookMyOrder(){
      this.$router.push({path:'/Admin/MyOrder'})
    },
    handleBackHome(){
      this.$router.push({path:'/OrderHome'})
    }

  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shoppingSuccess{
    height: 50%;
    background-color: #fff;
  }
  .shoppingSuccessContent{
    color: #6b6b6b;
  }
  .sh-s-c-img{
    padding-top: 2rem;
    text-align: center;
  }
  .sh-s-c-bottom{
    margin-top: 2rem;
    text-align: center;
  }
  .sh-s-c-bottom span{
    display: inline-block;
    text-align: center;
    width: 30%;
  }
  .sh-s-c-bottom span:nth-child(1){
    line-height: 1.2rem;
    border-right:2px solid #a9a9a9;
  }
</style>
<style>
  .sh-s-c-img .weui-icon_msg{
    font-size: 8rem;
  }
</style>
