<template>
  <div class="GoodsDetails">
    <x-header :left-options="{backText: ''}">
      <!-- <span class="g-d-icon" slot="overwrite-left"><x-icon type="ios-arrow-left" size="26"></x-icon></span> -->
      <span class="g-d-icon" slot="left"><x-icon type="ios-arrow-left" size="26"></x-icon></span>
      <span class="g-d-icon" slot="right"></span>
    </x-header>
    <!-- <div class="g-d-header fc">
      <span class="fl" @click="handleGoBack"><</span>
      <span class="fr" @click="handleGoShop"></span>
    </div> -->
    <div class="g-d-content">
      <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom">
        <div class="">
          <div>
            <div class="g-d-c-img"></div>
            <ul class="g-d-c-detail">
              <li>这是商品名这是商品名这是商品名这是商品名这是商品名这是商品名这是商品名</li>
              <li>这是介绍这是介绍这是介绍这是介绍这是介绍</li>
              <li>库存<i>99999</i></li>
            </ul>
            <group>
              <cell title="选择产品制作要求"  is-link @click.native="handleProduct"></cell>
            </group>
          </div>
        </div>
      </scroller>
      <flexbox :gutter="0" class="g-d-c-footer">
        <flexbox-item><div class="g-d-item g-d-basket"><i @click="handleGoShopList"></i></div></flexbox-item>
        <flexbox-item :span="3"><div class="g-d-item g-d-shop-car">加入购物车</div></flexbox-item>
        <flexbox-item :span="3"><div class="g-d-item g-d-shop">立即购买</div></flexbox-item>
      </flexbox>
      <div v-transfer-dom class="good-popup">
        <popup v-model="good_request" height="30rem">
          <div class="g-p-content">
            <div class="g-p-c-title">制作要求</div>
            <div class="g-p-c-detail">
              <ul>
                <li class="g-p-c-first fc">打印颜色
                  <checker v-model="demo1" default-item-class="g-p-c-item" selected-item-class="g-p-c-item-selected">
                    <checker-item value="1">彩色</checker-item>
                    <checker-item value="2">黑白</checker-item>
                  </checker>
                </li>
                <li class="fc">内页纸张
                  <div class="g-p-c-second fc">
                    <checker v-model="demo21" default-item-class="g-p-c-item-second" selected-item-class="g-p-c-item-second-selected">
                      <div class="g-p-c-second-item-h fc">
                        <span :class="['g-p-c-item',{'g-p-c-item-selected': demo21=='1-1' || demo21=='1-2'}]">复印纸</span>
                        <div class="g-p-c-second-check fr">
                          <checker-item value="1-1">彩色</checker-item>
                          <checker-item value="1-2">黑白</checker-item>
                        </div>
                        
                      </div>
                      <div class="g-p-c-second-item-h fc">
                        <span :class="['g-p-c-item',
                          {'g-p-c-item-selected': demo21=='2-1' 
                                               || demo21=='2-2'
                                               || demo21=='2-3'
                                               || demo21=='2-4'
                                               || demo21=='2-5'
                                               || demo21=='2-6'
                          }]">专用纸</span>
                        <div class="g-p-c-second-check fr">
                          <checker-item value="2-1">彩色</checker-item>
                          <checker-item value="2-2">黑白</checker-item>
                          <checker-item value="2-3">黑白</checker-item>
                          <checker-item value="2-4">黑白</checker-item>
                          <checker-item value="2-5">黑白</checker-item>
                          <checker-item value="2-6">黑白</checker-item>
                        </div>
                      </div>
                      <div class="g-p-c-second-item-h fc">
                        <span :class="['g-p-c-item',
                          {'g-p-c-item-selected': demo21=='3-1' 
                                               || demo21=='3-2'
                                               || demo21=='3-3'
                                               || demo21=='3-4'
                                               || demo21=='3-5'
                          }]">铜版纸</span>
                        <div class="g-p-c-second-check fr">
                          <checker-item value="3-1">彩色</checker-item>
                          <checker-item value="3-2">黑白</checker-item>
                          <checker-item value="3-3">黑白</checker-item>
                          <checker-item value="3-4">黑白</checker-item>
                          <checker-item value="3-5">黑白</checker-item>
                        </div>
                      </div>
                      <div class="g-p-c-second-item-h fc">
                        <span :class="['g-p-c-item',
                          {'g-p-c-item-selected': demo21=='4-1' 
                                               || demo21=='4-2'
                                               || demo21=='4-3'
                                               || demo21=='4-4'
                                               || demo21=='4-5'
                          }]">亚粉纸</span>
                        <div class="g-p-c-second-check fr">
                          <checker-item value="4-1">彩色</checker-item>
                          <checker-item value="4-2">黑白</checker-item>
                          <checker-item value="4-3">黑白</checker-item>
                          <checker-item value="4-4">黑白</checker-item>
                          <checker-item value="4-5">黑白</checker-item>
                        </div>
                      </div>
  
                    </checker>
                  </div>
                </li>
                <li class="g-p-c-first fc">单双面
                  <checker v-model="demo3" default-item-class="g-p-c-item" selected-item-class="g-p-c-item-selected">
                    <checker-item value="1">单面</checker-item>
                    <checker-item value="2">双面</checker-item>
                  </checker>
                </li>
                <li class="g-p-c-first fc">封面覆盖
                  <checker v-model="demo4" default-item-class="g-p-c-item" selected-item-class="g-p-c-item-selected">
                    <checker-item value="1">无</checker-item>
                    <checker-item value="2">亮膜</checker-item>
                    <checker-item value="2">哑膜</checker-item>
                    <checker-item value="2">十字膜</checker-item>
                    <checker-item value="2">皮纹膜</checker-item>
                  </checker>
                </li>
              </ul>
            </div>
          </div>
          <div class="g-p-confirm" @click="good_request = false">确认</div>
        </popup>
      </div>
      <div v-transfer-dom class="good-car-popup">
        <popup v-model="good_car_show">
          <div class="g_c_top fc">
            <span class="fl">已选商品</span>
            <span class="fr">清空</span>
          </div>
          <div class="g-c-list">
            <scroller lock-x height="400px" @on-scroll-bottom="onScrollBottom" :scroll-bottom-offst="50">
              <div class="scroller-box-5">
                <group v-for="i in 15">
                  <x-number title="这是属性列表" v-model="roundValue" button-style="round" :min="0"></x-number>
                </group>
                <!-- <load-more tip="loading" ></load-more> -->
              </div>
            </scroller>
          </div>
          <flexbox :gutter="0" class="g-d-c-footer">
            <flexbox-item><div class="g-d-item g-d-basket"><i></i></div></flexbox-item>
            <flexbox-item :span="3"><div class="g-d-item g-d-shop-car">加入购物车</div></flexbox-item>
            <flexbox-item :span="3"><div class="g-d-item g-d-shop">立即购买</div></flexbox-item>
          </flexbox>
        </popup>
      </div>
    </div>
    
  </div>
</template>

<script>
import { XHeader, Group, Cell,  Scroller, Flexbox, FlexboxItem, TransferDom, Popup, Checker,  CheckerItem, XNumber} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Group,
    Cell,
    Scroller,
    Flexbox, 
    FlexboxItem,
    Popup,
    Checker,  
    CheckerItem,
    XNumber
 },
  data () {
    return {
      good_request: false,
      good_car_show:false,
      demo1:'',
      demo3:'',
      demo4:'',
      demo21:'',
      demo22:'',
      demo23:'',
      demo24:'',
      roundValue: 0,//购物车数量
    }
  },
  methods:{
    //返回
    handleGoBack(){
      this.$router.push({path:'/Admin/OrderList'})
    },
    //跳转购物车
    handleGoShop(){

    },
    //打开购物车列表
    handleGoShopList(){
      this.good_car_show = !this.good_car_show
    },
    onScrollBottom(){

    },
    handleProduct(){
      console.log(1)
      this.good_request = !this.good_request
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-d-icon{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-color: rgba(0,0,0,.355);
    border-radius: 50%;
    margin-top: -7px;
  }
  
  .g-d-icon .vux-x-icon{
    margin-left: 0.1rem;
    margin-top: 0.2rem;
  }

  .g-d-header{
    position: fixed;
    top:0;
    z-index: 99;
    padding: 0.45rem 0;
    width: 100%;
    
  }
  .g-d-header span{
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    background-color: rgba(0,0,0,.4);
    border-radius:50%;
    color:#fff;
    margin:0 2%;
  }
  .g-d-content{
    height: 100%;
  }
  .g-d-c-img{
    width: 100%;
    height: 26rem;
    background-color: #ccc;
  }
  .g-d-c-detail{
    padding: 0.5rem 4%;
    background-color: #fff;
  }
  .g-d-c-detail li{
    line-height: 1.4rem;
    color: #565656; 
  }
  .g-d-c-detail li:nth-child(2){
    font-size: 0.8rem;
    color:#a2a0a0;
  }
  .g-d-c-detail li:nth-child(3) i{
    margin-left: 1.4rem;
    font-size: 1rem;
  }
  .g-d-c-footer{
    background-color: #d6d6d6;
    position: fixed;
    bottom: 0;
    height: 2.7rem;
    text-align: center;
  }
  .g-d-basket i{
    display: inline-block;
    position: absolute;
    top: -2rem;
    left: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: #909090;
    border-radius:50%;
  }
  .g-d-shop-car{
    /*background-color: #FFA500;*/
    background-image: -webkit-linear-gradient(to right,#ffb54a,#ff9800);
       background-image: -moz-linear-gradient(to right,#ffb54a,#ff9800);
        background-image: -ms-linear-gradient(to right,#ffb54a,#ff9800);
         background-image: -o-linear-gradient(to right,#ffb54a,#ff9800);
            background-image: linear-gradient(to right,#ffb54a,#ff9800);
    color: #fff;
  }
  .g-d-shop{
    /*background-color: #FF4500;*/
    background-image: -webkit-linear-gradient(to right,#ff7441,#FF4500);
       background-image: -moz-linear-gradient(to right,#ff7441,#FF4500);
        background-image: -ms-linear-gradient(to right,#ff7441,#FF4500);
         background-image: -o-linear-gradient(to right,#ff7441,#FF4500);
            background-image: linear-gradient(to right,#ff7441,#FF4500);
    color: #fff;
  }
  .g-d-item{
    height: 2.7rem;
    line-height: 2.7rem;
  }
  .g-p-c-item{
    display: inline-block;
    padding: 0 0.8rem;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.8rem;
    border-radius: 0.7rem;
    background-color: #ccc;
    color: #797979;
  }
  .g-p-c-item-selected{
    background-color: #5e8eda;
    color: #fff;
  }
  
  .g-p-c-title{
    text-align: center;
    height: 2rem;
  }
  .g-p-c-detail .g-p-c-first .vux-checker-box{
    display: inline-block;
    width: 78%;
    float: right;
  }
  .g-p-c-detail .g-p-c-second{
    display: inline-block;
    width: 78%;
    float: right;
  }
  .g-p-c-detail{
    color:#585858;
  }
  .g-p-c-detail>ul>li{
    padding: 0.4rem 0.4rem;
    border-top: 1px solid #ccc;
  }
  .g-p-c-item-second{
    display: inline-block;
    padding: 0.1rem 0.8rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.8rem;
    border:1px solid #ccc;
    border-radius:5px;
    color: #797979;
  }
  .g-p-c-item-second-selected{
    border-color: #5e8eda;
    color: #5e8eda;
  }
  .g-p-c-second-item-h{
    margin-bottom: 0.6rem;
  }
  .g-p-c-second-check{
    width: 68%;
  }
  .g-p-confirm{
    position: absolute;
    bottom: 0;
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
    width: 100%;
    background-color: #5e8eda;
    color: #fff;
  }
  .g_c_top{
    padding: 0.8rem;
    background-color: #ccc;
  }
  .g_c_top span{
    font-size: 1rem;
  }
  .g-c-list{
    padding-bottom: 2rem;
    
  }

</style>
<style>
  .GoodsDetails .vux-header{
    background-color: transparent;
    border-bottom: none;
  }
  .GoodsDetails .vux-header .vux-header-left .left-arrow{
    width: 4rem;
  }
  .GoodsDetails .vux-header .vux-header-left .left-arrow:before{
    content: "";
    visibility: hidden;
  }
  .good-popup .vux-popup-dialog{
    top: 0;
    width: 90%;
    left: 0;
    right: 0;
    margin: auto;
    padding: 0.4rem 0;
    border-radius: 5px;
    overflow: hidden;
  }
  .good-car-popup .vux-popup-dialog{
    background-color: #fff;
  }
  .good-popup .vux-checker-item{
    margin-bottom: 0.1rem;
  }
  .g-c-list .weui-cells{
    margin-top:0;
    margin-bottom: 0.5rem;
  }
  .g-c-list .weui-cells:before{
    border:0;
  }
</style>
