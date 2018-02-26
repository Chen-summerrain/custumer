<template>
  <div class="ShoppingCar">
    <x-header :left-options="{showBack: false}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <div class="contentBox ShoppingCar">
      <scroller lock-x height="-44">
        <div class="scroller-box">
          <div class="ShoppingCar-content" v-for="i in 5">
            <div class="sh-c-tit fc">
              <span>左岸图文文印店</span>
              <span class="fr">删除</span>
            </div>
            <div class="m-o-c-t fc">
              <div class="m-o-c-t-img fl"></div>
              <div class="m-o-c-t-tit fr">
                <span>这是标题这是标题这是标题这是标题这是标题这是标题</span>
                <span>这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</span>
                <span>份数 X1</span>
              </div>
            </div>
            <group>
              <cell title="制作要求"  is-link @click.native="handleProductRequest"></cell>
            </group>
            <group>
              <x-number title="购买数量" :value="num" :min="0"></x-number>
            </group>
            <div class="m-o-c-btn">
              <span @click="handleShoppingCount">去结算</span>
            </div>
          </div>
        </div>
      </scroller>
      
    </div>
    <div v-transfer-dom class="p-details-show">
      <popup v-model="request_show" position="bottom">
        <div class="p-d-show-top">
          <div>制作要求</div>
          <ul>
            <scroller lock-x height="400px">
              <div class="scroller-box">
                <li v-for="i in 25"> <span style="margin-right: 20px;">{{i}}.</span> 黑白 / 复印纸 / 单面 / 无</li>
              </div>
            </scroller>
          </ul>
        </div>
        <div class="p-d-show-btn" @click="request_show = false">完成</div>
      </popup>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell,  Scroller,  TransferDom, Popup, XNumber} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Group,
    Cell,
    Scroller,
    Popup,
    XNumber
  },
  data () {
    return {
      headerTitle:'',
      request_show:false,
      num:0,
    }
  },
  methods:{
    handleProductRequest(){
      this.request_show = !this.request_show
    },
    handleShoppingCount(){
      this.$router.push({path:'/ShopCar/ShoppingOrder'})
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
  .ShoppingCar{
    color: #6b6b6b;
  }
  .sh-c-tit{
    padding: 0 3%;
    height: 2.4rem;
    line-height: 2.4rem;
    background-color: #fff;
  }
  .ShoppingCar-content{
    margin-bottom: 0.8rem;
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
    padding: 0.4rem 3%;
    text-align: right;
    background-color: #fff;
  }
  .m-o-c-btn span{
    padding: 0.2rem 1.4rem;
    border-radius:4px;
    background-color:#5e8eda;
    color:#fff;
  }

  .p-details-show .vux-popup-dialog{
    overflow: hidden;
  }
  .p-d-show-top{
    padding: 0.6rem 1rem 0;
    background-color: #fff;
  }
  .p-d-show-top>div{
    text-align: center;
  }
  .p-d-show-top li{
    line-height: 2rem;
    color: #525252;
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
  .weui-cells{
    margin-top: 0;
  }
  .vux-number-selector svg{
    fill: #286fde;
  }
  .ShoppingCar .weui-cells:before{
    border:0;
  }
</style>
