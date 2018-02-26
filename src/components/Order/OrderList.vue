<template>
  <div class="orderList">
    <x-header :left-options="{backText: ''}">
      <div class="orderList-search" slot="overwrite-title">
        <search
          v-model="value"
          position="fixed"
          @on-submit="onSubmit"
          ref="search">
      </search>
      </div>
    </x-header>
    <div class="orderGoods">
      <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" :scroll-bottom-offst="50">
        <div class="">
          <span v-for="i in num" @click="handleGoodsDetails" class="orderGoods-detail">
            <i></i>
            <i>这是商品名称这是商品名称这是商品名称</i>
            <i>这是商品介绍这是商品介绍这是商品介绍这是商品介绍这是商品介绍</i>
          </span>
          <load-more tip="loading" ></load-more>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import { XHeader, Search, Group, Cell,  Scroller, LoadMore } from 'vux'
export default {
  components: {
    Search,
    Group,
    Cell,
    Scroller,
    LoadMore,
    XHeader 
    
  },
  data () {
    return {
      value:'',
      num:5,
    }
  },
  methods:{
    onSubmit(){
      console.log(this.value)
    },
    onScrollBottom(){
      console.log(1)
    },
    handleGoodsDetails(){
      this.$router.push({path:'/Admin/GoodsDetails'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .orderGoods{
    position: relative;
    top:2.7rem;
    width: 100%;
    
  }
  .orderGoods-detail{
    display: inline-block;
    width: 49%;
    margin-top: 0.5rem;
  }
  .orderGoods-detail-even{
    
  }
  .orderGoods-detail:nth-child(even){
    margin-left: 2%;
  }
  .orderGoods .orderGoods-detail i{
    display: block;
  }
  .orderGoods .orderGoods-detail i:nth-child(1){
    height: 9rem;
    background-color: #ccc;
  }
  .orderGoods .orderGoods-detail i:nth-child(2){
    padding: 0.2rem 0.4rem 0.1rem 0.4rem;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-align: left;
    background-color: #fff;
    color:#636363;
  }
  .orderGoods .orderGoods-detail i:nth-child(3){
    padding: 0 0.4rem 0.4rem 0.4rem;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: left;
    background-color: #fff;
    color:#949494;
    
  }  
</style>
<style>
  .orderList-search .weui-search-bar:before,.orderList-search .weui-search-bar:after{
    border:0;
  }
  .orderList .vux-header-title-area{
        margin: 0 10%;
  }
  .orderList .vux-search-fixed{
    width: 80%;
    left: 0;
    right: 0;
    margin:auto;

  }
</style>

