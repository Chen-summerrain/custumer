<template>
  <div class="home">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <div class="tabbar">
      <tabbar class="vux-demo-tabbar" icon-class="vux-center"  slot="bottom">
        <tabbar-item link="/News" selected>
          <span class="iconfont icon-wodedingdan" slot="icon" ></span>
          <span slot="label">信息</span>
        </tabbar-item>
        <tabbar-item link="/ShoppingCar">
          <span class="iconfont icon-shangcheng" slot="icon"></span>
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="/OrderHome">
          <span class="iconfont icon-wodedingdan" slot="icon"></span>
          <span slot="label">下单</span>
        </tabbar-item>
        <tabbar-item link="/Admin">
          <span class="iconfont icon-wode" slot="icon"></span>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import golVux from '@/assets/js/gol-vux'

import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem,XButton, 
         ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      transitionName: 'slide-left',
      router_arr:[]
    }
  },
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    XButton,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  },
  methods:{
    
  },
  created(){
    // console.log(this.$router)
    this.$router.push({path:'/News'})
    
  },
  // watch: {
  //   $route(to, from) {

  //     // let name= to.name;
  //     // if(this.router_arr.indexOf(name) ===-1){
  //     //   this.router_arr.push(name)
  //     //   this.transitionName = 'slide-right'
  //     // }else{
  //     //   this.transitionName = 'slide-left' 
  //     // }
  //     // console.log(this.router_arr)
  //     // const toDepth = to.path.split('/').length
  //     // const fromDepth = from.path.split('/').length
  //     // // console.log(toDepth,1)
  //     // // console.log(fromDepth,2)
  //     // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left' 
  //     // const history = window.sessionStorage
  //     // history.clear()
  //     // let historyCount = history.getItem('count') * 1 || 0
  //     // history.setItem('/', 0)
      
  //     // console.log(window.sessionStorage.getItem('count'))
      

      
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .customerBox{
    margin-top: 2.7rem;
  }
  .tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
  }
  .tabbar .weui-tabbar{
    background-color: #fff;
  }
  /*titt*/
  .title-content{
    font-size: 1rem;
    font-weight: 600;
  }
  .title-right{
    position: absolute;
    right: 1rem;
    font-size: 0.93rem;
    color: #7d7d7d;
  }
  .title-right-add{
    font-size: 1.8rem;
  }
  .p-details-show .vux-popup-dialog{
    background-color: #fff;
  }
  /* scroler */
  .scroller-box{
    padding-bottom: 10rem;
  }
  .scroller-box-5{
    padding-bottom: 5rem;
  }
  .scroller-box-2{
    padding-bottom: 2rem;
  }
  /* tab-bar css color */
  /*.vux-demo-tabbar .weui-tabbar__icon.iconfont {
    color: #2b7cd2;
  }
  .vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
    color: #2b7cd2;
  }*/

  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: #2b7cd2 !important;
  }
</style>
