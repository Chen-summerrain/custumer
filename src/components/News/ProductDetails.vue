<template>
  <div class="productDetails">
    <x-header>{{headerTitle}}</x-header>
    <scroller lock-x height="-0">
      <div class="scroller-box-2">
        <div class="productDetails-content">
          <div class="p-content-top">
            <div class="p-content-top-tit">￥{{order_details.receivable}}</div>
            <ul>
              <li>
                <span>项目名称</span>
                <span>{{order_details.project_name}}</span>
              </li>
              <li>
                <span>联系人</span>
                <span>{{order_details.linkman_name}}</span>
              </li>
              <li>
                <span>联系地址</span>
                <span>{{order_details.address}}</span>
              </li>
            </ul>
          </div>
          <div class="p-content-mid">
            <div class="p-content-mid-details" v-for="item in order_details.goods">
              <div class="p-content-mid-top">
                <div class="p-details-tit">
                  <span>{{item.product_name}}</span>
                  <span>{{item.product_price}}</span>
                </div>
                <span class="p-details-num">份数 X{{item.copies}}</span>
              </div>
              <div class="p-content-mid-botm">
                <group @click.native="handleProductShow(item.id)">
                  <cell is-link>
                    <span slot="title">详情</span>
                  </cell>
                </group>
              </div>
            </div>
          </div>
          <!-- <div class="p-content-bottom">
            <ul>
              <li>
                <span>结算单号</span>
                <span>000000000000</span>
              </li>
              <li>
                <span>结算方式</span>
                <span>支付宝</span>
              </li>
              <li>
                <span>下单日期</span>
                <span>2017-10-30 12:12:12</span>
              </li>
              <li>
                <span>收银时间</span>
                <span>2017-10-30 12:12:12</span>
              </li>
            </ul>
          </div> -->
          
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    <div class="p-content-btn" v-if="disabled_btn === 1">
      <x-button mini plain @click.native="handleApplyRemove" v-show="disabled_btn === 1">确认签名</x-button>
      <!-- <x-button mini plain @click.native="handleApplyRemove" v-show="disabled_btn === 2">确认</x-button> -->
      <!-- <x-button mini plain @click.native="handleApplyRemove" v-show="disabled_btn === 1">申请移除</x-button> -->
      <!-- <x-button mini plain class="p-content-btn-disabled" disabled v-show="disabled_btn === 2">等待移除</x-button> -->
      <!-- <x-button mini plain class="p-content-btn-disabled" disabled v-show="disabled_btn === 3">已移除</x-button> -->
      <!-- <x-button mini plain class="p-content-btn2" @click.native="handleProductComment">评价</x-button> -->
    </div>
    <div v-transfer-dom class="p-details-show">
      <popup v-model="detalis_show" position="bottom" height="50%">
        <div class="p-d-show-top">
          <div>产品详情</div>
          <ul>
            <li>
              <span>加工尺寸</span>
              <span>{{detail.finish_size}}</span>
            </li>
            <li>
              <span>单双面</span>
              <span>{{detail.product_is_double}}</span>
            </li>
            <li>
              <span>数量</span>
              <span>{{detail.count}}</span>
            </li>
            <li>
              <span>市场价</span>
              <span>{{detail.product_original_price}}</span>
            </li>
            <li>
              <span>实收价</span>
              <span>{{detail.product_price}}</span>
            </li>
          </ul>
        </div>
        <div class="p-d-show-btn" @click="handleProductClose">完成</div>
      </popup>
    </div>
  </div>
</template>

<script>
import api from '../../constance/api.js'
import { XHeader,Cell, CellBox, Group, XButton, TransferDom, Popup, Scroller } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Cell,
    CellBox, 
    Group,
    XButton,
    TransferDom,
    Popup,
    Scroller
  },
  data () {
    return {
      headerTitle:'',
      detalis_show: false,
      disabled_btn: 1,
      order_details:{},
      order_id:'',
      detail:{},//详情
    }
  },
  methods:{
    //弹出产品详情
    handleProductShow(id){
      this.detalis_show = true;
      this.detail = this.order_details.goods.filter(item=>item.id === id)[0]
     
    },
    //产品详情关闭
    handleProductClose(){
      this.detalis_show = false;
    },
    //项目申请移除
    handleApplyRemove(){
      // this.confirm('申请移除','您确认移除该项目吗',function(){
      //   this.toast('申请成功');
      //   this.disabled_btn = 2
      // }.bind(this))
      this.confirm_sign()
      
    },
    confirm_sign(){
      let data={
        order_id:this.order_id
      }
      this.apiPost(api.confirm_sign,data,(data)=>{
        this.toast(data.message);
      })
    },
    //项目评价
    handleProductComment(){
      this.$router.push({path:'/ProductComment'})
    },
    get_order_detail(id){
      let data = {
        order_id:id
      }
      this.apiPost(api.details_order,data,(data)=>{
        this.order_details = data.data
      })
    }

  },
  created(){
    var routers = this.$router.history
    this.headerTitle = routers.current.query.type===1? "订单详情":"账单详情";
    this.disabled_btn = routers.current.query.type===1? 1:2;
    this.order_id = routers.current.query.id
    this.get_order_detail(routers.current.query.id)
  },
  watch:{
    $route(to,from){
      if(to.name ==='ProductDetails'){
        this.headerTitle = to.query.type===1? "订单详情":"账单详情";
        this.disabled_btn = to.query.type===1? 1:2;
        this.order_id = to.query.id
        this.get_order_detail(to.query.id)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .productDetails .vux-header{
    position: fixed;
    top: 0;
    width: 100%;
  }
  .productDetails-content{
    padding: 3.4rem 0 5rem;
  }
  .p-content-top{
    background-color: #fff;
    padding: 0.4rem;
  }
  .p-content-top-tit{
    margin: 0.6rem 0;
    text-align: center;
    font-size: 1.8rem;
    color: red;
  }
  .p-content-top ul{
    width: 94%;
    margin: 0 auto;
  }
  .p-content-top ul li span{
    display: inline-block;
  }
  .p-content-top ul li span:nth-child(1){
    width: 20%;
    vertical-align: top;
  }
  .p-content-top ul li span:nth-child(2){
    width: 78%;
    text-align: right;
    color: #6b6b6b;
  }
  .p-content-mid{
    background-color: #fff;
    margin: 0.6rem 0;
    padding: 0.6rem 0;
    color: #6b6b6b;
  }
  .p-content-mid-details{
    margin-bottom: 0.4rem;
  }
  .p-content-mid-top{
    background-color: aliceblue;
    padding: 0 4%;
    margin: 0 auto;
  }
  .p-details-tit span{
    display: inline-block;
  }
  .p-details-tit span:nth-child(1){
    width: 74%;
  }
  .p-details-tit span:nth-child(2){
    float: right;
  }
  .p-details-num{
    display: block;
    text-align: right;
  }
  .p-content-bottom{
    background-color:#fff;
  }
  .p-content-bottom ul{
    width: 94%;
    margin: 0 auto;
    padding: 0.2rem 0;
  }
  .p-content-bottom ul li{
    line-height: 1.2rem;
  }
  .p-content-bottom ul li span{
    font-size: 0.8rem;
    color: #6b6b6b;
  }
  .p-content-bottom ul li span:nth-child(1){
    margin-right: 1rem;
  }
  .p-content-btn{
    position: fixed;
    bottom: 0;
    padding: 0.5rem 0;
    width: 100%;
    text-align: right;
    background-color: #fff;
    border-top: 1px solid #f3f0f0;
  }
  .p-content-btn .weui-btn{
    margin-top: 0;
    margin-right: 2rem;
    border: 1px solid #88b1f3;
    color: #88b1f3;
  }
  .p-content-btn .p-content-btn-disabled{
    background-color: #ccc;
    color: #fff;
    border: 1px solid #fff;
  }
  .p-content-btn2{
    margin-right: 1rem;
  }
  .p-details-show .vux-popup-dialog{
    overflow: hidden;
  }
  .p-d-show-top{
    padding: 0.6rem 1rem 0;
  }
  .p-d-show-top>div{
    text-align: center;
  }
  .p-d-show-top li{
    line-height: 2rem;
    color: #525252;
  }
  .p-d-show-top li span:nth-child(1){
    display: inline-block;
    width: 6rem;
  }
  .p-d-show-btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 2.4rem;
    text-align: center;
    background-color:#88b1f3;
    color:#fff;
  }
</style>
<style>
  .p-content-mid-botm .weui-cells{
    margin-top: 0;
    background-color: aliceblue;
  }
  
  
</style>
