<template>
  <div class="News">
    <div class="header">
      <div class="header-top">
        <search class="news-search"
          v-model="keyword"
          position="absolute"
          @on-submit="onSubmit"
          @on-blur="onblur"
          placeholder="输入查询的内容"
          ref="search">
        </search>
        <group class="news-selector selector">
          <selector :options="selector_list" v-model="company_id" placeholder="请选择门店"></selector>
        </group>
      </div>
      <div class="header-bottom">
        <tab v-model="index" :line-width='1' active-color='#5e8eda' custom-bar-width="60px">
          <tab-item selected @on-item-click="handTabBar">订单</tab-item>
          <tab-item @on-item-click="handTabBar" >账单</tab-item>
        </tab>
        <group class="n-choose-list">
          <cell
          title="筛选"
          is-link
          :border-intent="false"
          :arrow-direction="showContent ? 'up' : 'down'"
          @click.native="showContent = !showContent"></cell>
          <div class="slide" :class="showContent?'animate':''">
            <div class="news-storeList-main">
              <div class="news-storeList-main-title">门店</div>
              <div class="news-storeList-main-list">
                <checker v-model="check_shop" type="checkbox" default-item-class="checkbox-item" selected-item-class="checkbox-item-selected" @on-change="handSelect_check">
                  <checker-item :value="0">全部</checker-item>
                  <checker-item :value="item.id" v-for="item in company_list">{{item.name}}</checker-item>
                </checker>
              </div>
              <div class="news-storeList-main-title">状态</div>
              <div class="news-storeList-main-list">
                <checker v-model="check_status" type="checkbox" default-item-class="checkbox-item" selected-item-class="checkbox-item-selected" @on-change="handSelect_check">
                  <checker-item :value="item.key" v-for="item in status_list">{{item.value}}</checker-item>
                </checker>
              </div>
              <div class="news-storeList-main-title">电子签名</div>
              <div class="news-storeList-main-list">
                <checker v-model="check_sign" type="checkbox" default-item-class="checkbox-item" selected-item-class="checkbox-item-selected" @on-change="handSelect_check">
                  <checker-item :value="0">全部</checker-item>
                  <checker-item :value="1">已签</checker-item>
                  <checker-item :value="2">未签</checker-item>
                </checker>
              </div>
              <div class="news-storeList-bottom">
                <button>重置</button>
                <button @click="postStoreList">完成</button>
              </div>
              </div>
          </div>
        </group>
      </div>
    </div>
    <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="scroller-box">
        <div class="content">
          <div class="news-order" v-show="index == 0">
            <div v-for="items in order_list">
              <!-- <swipeout>
                <swipeout-item transition-mode="follow">
                  <div slot="right-menu">
                    <swipeout-button type="warn">删除</swipeout-button>
                    <swipeout-button type="default">忽略</swipeout-button>
                  </div>
                  <div slot="content" style="padding:12px 6px 10px 16px;" class="news-status details">
                    <h3>这是标题这是标题这是标题这是标题<i>2017-10-22</i></h3>
                    <p>这是内容这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标</p>
                  </div>
                </swipeout-item>
              </swipeout> -->
              <h2 class="news-details-tit">{{items[0].customer_name}}</h2>
              <div class="news-status details news-order-list" v-for="item in items" @click="handleNewsDetails(item.id,1)">
                <h3>{{item.project_name}}<i>{{item.receivable}}</i></h3>
                <p>{{item.create_time}}</p>
              </div>
            </div>
          </div>
          <div class="news-count" v-show="index == 1">
            <div class="news-count-list" v-for="items in credit_list">
              <div class="news-count-list-title">
                <span>{{items.create_time}} {{items.order[0].customer_name}} </span>
                <!-- <span @click="operateNewsCount"><i></i><i></i><i></i></span> -->
              </div>
              <div class="news-count-list-content">
                <ul v-for="item in items.order" @click="handleNewsDetails(item.id,2)">
                  <li></li>
                  <li>
                    <span>{{item.project_name}}<i>{{item.receivable}}</i></span>
                    <span>{{item.create_time}}</span> 
                  </li>
                </ul>
              </div>
            </div>
            <div v-transfer-dom>
              <actionsheet v-model="showNewsCount" :menus="menus" @on-click-menu-operate="onOperateBill" @on-click-menu-delete="onDelete" show-cancel>
              </actionsheet>
            </div>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
// import golVux from '@/assets/js/gol-vux'
import api from '../../constance/api.js'

import { Actionsheet, Search, Group, Cell, XButton, Selector,Tab, TabItem, Swiper, Swipeout, SwipeoutItem, 
         SwipeoutButton, TransferDom, Checker, CheckerItem, Scroller,md5,cookie } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Search,
    Group,
    Cell,
    XButton,
    Selector,
    Tab, 
    TabItem, 
    Swiper, 
    Checker, 
    CheckerItem,
    Swipeout, 
    SwipeoutItem, 
    SwipeoutButton,
    Actionsheet,
    Scroller
  },
  data () {
    return {
      showContent: false,
      index: 0,
      keyword:'',
      check_shop: [0],//多选门店
      check_status:[0],//状态多选
      check_sign:[0],//电子签名
      status_list:[
        {key:0, value: '全部'},
        {key:1, value: '开单'},
        {key:2, value: '印前'},
        {key:3, value: '印后'},
        {key:4, value: '已完工'}
      ],

      company_id: '',
      showNewsCount:false,
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      menus: {
        operate: '<span style="color:#5e8eda">转发账单</span>',
        delete: '<span style="color:red">删除账单</span>'
      },
      company_list:[],//门店列表
      selector_list:[],//门店select
      order_list:[],//订单列表
      credit_list:[],//账单列表
    }
  },
  methods:{
    handTabBar(index){
      
      
    },
    onSubmit(){
      
      
      
    },
    //筛选消息
    postStoreList(){
      this.showContent = !this.showContent
    },
    handSelect_check(){

    },
    //
    //订单详情
    handleNewsDetails(id,type){
      this.$router.push({path:'/ProductDetails',query:{type:type,id:id}})

    },
    //账单消息操作
    operateNewsCount(){
      this.showNewsCount = true;
    },
    //转发账单
    onOperateBill(){
      this.$router.push({path:'/ContactPerson'})
    },
    onDelete(){
      this.confirm('删除账单','删除以后就无法恢复了哦,还确认删除吗')
    },
    // 滚动加载
    onScrollBottom(){

    },
    
  },
  created(){
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  .news-details-tit{
    background-color: #a5b4bd;
    font-size: 1rem;
    line-height: 2;
    text-indent: 0.6rem;
    color: #fff;
  }
  .news-order-list{
    padding:0.5rem 1rem;
    background-color: #fff;
    border-radius:4px;
    margin-bottom:.5rem;
    height: 2.5rem;
  }
  .News{
    height: 100%;
  }
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color:#fff;
  }
  /* 筛选animate -start */
  .slide{
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  /* 筛选animate -end */
  .news-storeList{
    font-size: 0.8em;
    color: #9a9a9a;
  }
  .news-storeList-top{
    padding-left: 0.4em;
    border-bottom: 1px solid #efefef;
    height: 2em;
    line-height: 2em;
  }
  .news-storeList-main{
    font-size: 0.90rem;
  }
  .news-storeList-main-title{
    padding-left: 0.62em;
    height: 1.8em;
    line-height: 1.8em;
    border-top:1px solid #D9D9D9;
  }
  /* 筛选样式 -start */
  .News .checkbox-item {
    background: #ececec;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    font-size: 0.6rem;
    margin-right: 0.5rem;
  }
  .News .checkbox-item-selected {
    color: #5e8eda;
  }
  /* 筛选样式 -end */
  .news-storeList-bottom{
    position:relative;
    height: 2em;
  }
  .news-storeList-bottom button{
    position: absolute;
    right: 0;
    width: 50%;
    height: 2em;
    line-height: 2rem;
    border: 0;
    font-size: 1em;
    color: #fff;
    background-color:#5e8eda;
  }
  .news-storeList-bottom button:nth-child(1){
    left: 0;
    background-color:#7cafff;
  }
  .news-order .vux-swipeout{
    margin-bottom: 0.5rem;
    -webkit-border-radius: .4rem;
       -moz-border-radius: .4rem;
         -o-border-radius: .4rem;
            border-radius: .4rem;
    overflow: hidden;
  }
  .content{
    position: relative;
    /*top: 7.4em;*/
    top: 5.4em;
    padding:0 .6rem 4rem;
  }
  .details h3{
    font-size: 1em;
    font-weight: normal;
    color: #1d1d1d;
  }
  .details h3 i{
    float: right;
    /*margin-top:0.3rem;*/
    font-size: 1.2rem;
    color: #d22d2d;
    font-style: normal;
  }
  .details p{
    font-size: 0.6em;
    color: #464646;
  }
  /* news-count-list */
  .news-count-list{
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  .news-count-list-title{
    background: #a5b4bd;
    text-indent: 0.6rem;
    color: #fff;
    padding: 0.2rem 0.5rem;
  }
  .news-count-list-title span:nth-child(2){
    float:right;
    line-height:1.2rem;
  }
  .news-count-list-title span:nth-child(2) i{
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color:#fff;
    border-radius:50%;
    margin-left:4px;
  }
  .news-count-list-content{
    padding: 0.2rem 0.5rem;
  }
  .news-count-list-content ul{
    border-bottom:1px solid #ececec;
  }
  .news-count-list-content ul:last-child{
    border-bottom:none;
  }
  .news-count-list-content li{
    display: inline-block;
    height:2.4rem;
  }
  .news-count-list-content li:nth-child(1){
    width: 2.4rem;
    border-radius:50%;
    background-color:#ececec;
    margin-right:0.4rem;
  }
  .news-count-list-content li:nth-child(2){
    width: 84%;
  }
  .news-count-list-content li:nth-child(2) span i{
    float:right;
    color:red;
    font-size:1.2rem;
  }
  .news-count-list-content li:nth-child(2) span{
    display: block;
  }
  .news-count-list-content li:nth-child(2) span:nth-child(2){
    color:#a5a5a5;
  }
</style>
<style>
  /*.news-status:before{
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 1.1em;
    left: 0.3em;
    z-index: 1;
  }*/
  .news-storeList-top span{
    position:relative;
  }
  .news-storeList-top span:after{
    content: " ";
    height: 6px;
    width: 6px;
    border-width: 1px 1px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
    transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
    position: absolute;
    top: 40%;
    right: -1.4em;
    margin-top: -4px;
  }
  .News .header-top{
    border-bottom: 1px solid #f5f5f5;
    height: 2.8em;
  }
  .News .vux-search-box{
    width: 60%;
  }
  .news-search .weui-search-bar{
    background-color:#fff;
  }
  .news-search .weui-search-bar__label{
    background-color:#EFEFF4;
    border-radius:5px;
  }
  .news-search .weui-search-bar__form:after{
    border:0;
  }
  .news-search .weui-search-bar:after,.News .weui-search-bar:before{
    border:0;
  }
  .news-search .weui-search-bar__form{
    background-color:#fff;
  }
  .news-selector{
    margin-top: 0;
  }
  .news-selector .vux-no-group-title{
    margin-top: 0;
  }
  .news-selector .weui-cells:before,.news-selector .weui-cells:after{
    border:0;
  }
  .news-selector{
    width: 40%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .news-selector .weui-cell_select .weui-select{
    color: #c3c2c2;
    font-size: .8em;
  }
  .header-bottom .vux-tab{
    height: 2em;
  }
  .header-bottom .vux-tab .vux-tab-item{
    line-height: 2em;
  }
  .news-storeList-main-list .vux-checker-box{
    padding: 0.4em 0.4em 0.6em;
  }
  /* 筛选样式 -start */
  .News .n-choose-list .weui-cell{
    padding: 0.4rem 0 0.4rem 0.6rem;
    width: 4rem;
    font-size: 0.96rem;
  }
  .News .n-choose-list .weui-cells:before{
    border:none;
  }
  .n-choose-list .vux-cell-primary{
    width: 4rem;
  }
  /* 筛选样式 -end */
</style>
