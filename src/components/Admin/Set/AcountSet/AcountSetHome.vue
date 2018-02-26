<template>
  <div class="AcountSetHome">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox AcountSetHomeContent">
          <group class="s-h-list">
            <cell title="修改绑定手机号" :link="{path:'/Login/activeacount',query:{type:3}}"></cell>
            <cell title="修改登录密码" :link="{path:'/Login/SetPassword',query:{type:3}}"></cell>
          </group>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader, Cell, Group, Badge, Scroller } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    Badge,
    Scroller
  },
  data () {
    return {
      headerTitle:''
    }
  },
  methods:{

  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .AcountSetHomeContent{
    color: #6b6b6b;
  }
  
</style>
<style>
  .s-h-list .weui-cells{
    margin-top: 0.3rem;
  }
</style>
