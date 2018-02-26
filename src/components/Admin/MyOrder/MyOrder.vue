<template>
  <div class="MyOrder">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <div class="contentBox MyOrderBox">
      <tab :line-width=2 active-color='#5e8eda' v-model="index">
        <tab-item @on-item-click="handleChangeTab">全部</tab-item>
        <tab-item @on-item-click="handleChangeTab">已下单</tab-item>
        <tab-item @on-item-click="handleChangeTab">已完工</tab-item>
        <tab-item @on-item-click="handleChangeTab">派送中</tab-item>
        <tab-item @on-item-click="handleChangeTab">已完成</tab-item>
      </tab>
      <scroller lock-x height="-10" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="50">
        <div class="scroller-box">
          <div class="MyOrder-content" v-for="i in 10">
            <div class="m-o-c-t fc" @click="handleMyOrderDetails">
              <div class="m-o-c-t-img fl"></div>
              <div class="m-o-c-t-tit fr">
                <span>这是标题这是标题这是标题这是标题这是标题这是标题</span>
                <span>这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</span>
                <span>X 1</span>
              </div>
            </div>
            <div class="m-o-c-btn">
              <span>删除订单</span>
            </div>
          </div>
          <!-- <load-more tip="loading"></load-more> -->
        </div>
      </scroller>
      
    </div>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, Scroller} from 'vux'
export default {
  components: {
    XHeader,
    Tab,
    TabItem,
    Scroller
  },
  data () {
    return {
      headerTitle:'',
      index:1,
      list2:['精选', '美食', '电影', '酒店', '外卖'],
    }
  },
  methods:{
    handleChangeTab(){
      console.log(this.index)
    },
    handleMyOrderDetails(){
      this.$router.push({path:'/Admin/MyOrderDetails'})
    },
    onScrollBottom(){

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
  .MyOrderBox{
    color: #6b6b6b;
  }
  .MyOrder-content{
    padding: 0.8rem 0 0.4rem 0;
    margin-top: 0.8rem;
    background-color: #fff;
   
  }

  .m-o-c-t{
    background-color: #f0f2fb;
    padding: 0.8rem 0 0.4rem 0;
  }
  .m-o-c-t-img{
    margin-left: 3%;
    width:20%;
    height: 5rem;
    background-color: #ccc;
  }
  .m-o-c-t-tit{
    
    margin-right: 3%;
    width: 70%;
  }
  .m-o-c-t-tit span:nth-child(1){
    color: #3a3a3a;
  }
  .m-o-c-t-tit span{
    display: block;
    line-height: 1rem;
    font-size: 1rem;
  }
  .m-o-c-t-tit span:nth-child(2){
    font-size: 0.9rem;
    margin-top: 0.4rem;
  }
  .m-o-c-t-tit span:nth-child(3){
    color: #3a3a3a;
    text-align: right;
  }
  .m-o-c-btn{
    text-align: right;
    margin-top: 0.2rem;
    margin-right: 1rem;
  }
  .m-o-c-btn span{
    padding: 0.1rem 0.5rem;
    color:#5e8eda;
    font-size: 0.8rem;
    border:1px solid #5e8eda;
  }
</style>
<style>
  
</style>
