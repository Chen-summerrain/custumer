<template>
  <div class="OrderHome">
    <div class="o-h-title">
      <search
        v-model="value"
        position="absolute"
        @on-submit="onSubmit"
        ref="search">
      </search>
      <group class="o-h-title-selecor">
        <selector v-model="value1" :options="list"></selector>
      </group>
    </div>
    <div class="leftBar">
      <span :class="{'active':active===0}" @click="active=0">图文产品</span>
      <span :class="{'active':active===1}" @click="active=1">办公印品</span>
      <span :class="{'active':active===2}" @click="active=2">宣传展示</span>
      <span :class="{'active':active===3}" @click="active=3">个性制定</span>
      <span :class="{'active':active===4}" @click="active=4">形象展示</span>
    </div>
    <div class="rightBar">
      <h2>图文产品</h2>
      <div class="order-list">
        <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" :scroll-bottom-offst="20">
          <div class="scroller-box-5">
            <span v-for="i in num" class="order-list-detail" @click="handleGoods">
              <i></i>
              <i>这是商品名称</i>
            </span>
            <load-more tip="loading" ></load-more>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Group, Cell, Selector, Scroller, LoadMore } from 'vux'
export default {
  components: {
    Search,
    Group,
    Cell,
    Selector,
    Scroller,
    LoadMore 
    
  },
  data () {
    return {
      value:'',
      value1:0,
      active:0,
      num:20,
      list: [{key: 0, value: '广东'}, {key: 1, value: '广西'}],
      is_show: false,
    }
  },
  methods:{
    onSubmit(){
      console.log(this.value)
    },
    onScrollBottom(){
      // console.log('sdsd')
      // this.num += 5
    },
    handleGoods(){
      this.$router.push({path:'/Admin/OrderList'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .OrderHome{
    height: 100%;
  }
  .o-h-title{
    position: fixed;
    top:0;
    width: 100%;
    height: 2.7rem;
    background-color: #fff;
  }
  .vux-search-box{
    width: 60%;
  }
  .o-h-title-selecor{
    position: absolute;
    right: 0;
    top: 0;
    width: 36%;
  }
  .leftBar{
    padding-top: 3rem;
    width: 26%;
    height:90%;
    display: inline-block;
    background-color: #fff;
    color: #676767;
  }
  .leftBar span{
    display: block;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #dadada;
  }
  .leftBar span.active{
    color: #5e8eda;
  }
  .rightBar{
    padding-top: 2.8rem;
    display: inline-block;
    float: right;
    height: 100%;
    width: 72%;
  }
  h2{
    height: 2rem;
    line-height: 2rem;
    font-weight: 400;
    font-size: 1rem;

  }
  .order-list{
    height: 620px;
    width: 100%;
    background-color: #fff;
  }
  .order-list .order-list-detail{
    display: inline-block;
    width: 26%;
    height: 6.5rem;
    margin-left: 1rem;
    margin-top: 1rem;

  }
  .order-list .order-list-detail i{
    display: block;
  }
  .order-list .order-list-detail i:nth-child(1){
    height: 5rem;
    background-color: #ccc;
  }
  .order-list .order-list-detail i:nth-child(2){
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    
  }
</style>
<style>
  .weui-search-bar__cancel-btn,
  .weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{
    display: none;
    background-color: #EFEFF4;
  }
  .weui-search-bar{
    background-color: #fff;
    height: 2.6rem;
  }
  .weui-search-bar__form:after{
    border: 0;
  }
  .weui-search-bar__form{
    overflow: hidden;
    border-radius: 10px;
  }
  .weui-search-bar__box,.weui-search-bar__label{
    background-color: #EFEFF4;
    
  }
  .weui-search-bar:after,
  .o-h-title .weui-search-bar:before,
  .o-h-title-selecor .weui-cells:before{
     border: 0;
  }
  .o-h-title-selecor .weui-cells{
    margin-top:0;
  }
  .o-h-title-selecor .weui-cell_select .weui-cell__bd:after{
    transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
  }
</style>
