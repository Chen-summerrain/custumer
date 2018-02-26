<template>
  <div class="ShoppingOrder">
    <x-header :left-options="{showBack: true}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <div class="contentBox ShoppingOrder">
      <scroller lock-x height="-44">
        <div class="">
          <div class="ShoppingOrder-content">
            <div class="sh-c-tit fc">
              <span>左岸图文文印店</span>
            </div>
            <group v-if="false">
              <cell title="取件人地址"  is-link @click.native="handleAddressExpress"></cell>
            </group>
            <group class="s-o-express-address" v-if="true">
              <cell title="取件人:超超"  value="155555555"></cell>
              <cell title="取件地址" is-link primary="content"
                    value="这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这">
              </cell>
            </group>
            <div class="m-o-c-t-box fc">
              <div class="m-o-c-t fc">
                <div class="m-o-c-t-img fl"></div>
                <div class="m-o-c-t-tit fr">
                  <span>这是标题这是标题这是标题这是标题这是标题这是标题</span>
                  <span>这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</span>
                  <span>份数 X1</span>
                </div>
              </div>
            </div>
            <group>
              <cell title="制作要求"  is-link @click.native="handleProductRequest"></cell>
            </group>
            <group>
              <cell title="购买数量"  value="10"></cell>
            </group>
            <group class="s-o-express-time">
              <datetime v-model="express_time" placeholder="请设置取货时间" :min-year=2017  format="YYYY-MM-DD HH:mm" 
                        @on-change="handleExpressChangeTime" title="取货时间"  confirm-text="完成" cancel-text="取消"
                        year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分">
              </datetime>
            </group>
            <group>
              <x-textarea title="备注" placeholder="请填写相应的备注信息" :show-counter="false" :rows="4"></x-textarea>
            </group>
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
              <div class="box2">
                <li v-for="i in 25"> <span style="margin-right: 20px;">{{i}}.</span> 黑白 / 复印纸 / 单面 / 无</li>
              </div>
            </scroller>
          </ul>
        </div>
        <div class="p-d-show-btn" @click="request_show = false">完成</div>
      </popup>
    </div>
    <div class="p-d-show-btn" @click="handleOrderComfirm">确认下单</div>
  </div>
</template>

<script>
import {XHeader, Group, Cell,  Scroller,  TransferDom, Popup, XNumber, Datetime, XTextarea} from 'vux'
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
    XNumber,
    Datetime,
    XTextarea
  },
  data () {
    return {
      headerTitle:'',
      request_show:false,
      num:0,
      express_time:'',
    }
  },
  methods:{
    //取件地址
    handleAddressExpress(){
      this.$router.push({path:'/ShopCar/ShoppingOrder'})
    },
    //制作要求
    handleProductRequest(){
      this.request_show = !this.request_show
    },
    //取货时间
    handleExpressChangeTime(){
      console.log(this.express_time)
    },
    //确认下单
    handleOrderComfirm(){
      this.$router.push({path:'/ShopCar/ShoppingSuccess'})
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
  .ShoppingOrder{
    color: #6b6b6b;
  }
  .sh-c-tit{
    position: relative;
    padding: 0 3%;
    height: 2.4rem;
    line-height: 2.4rem;
   /* background-color: #fff;*/
  }
  /*.sh-c-tit:after{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }*/
  .ShoppingOrder-content{
    margin-bottom: 0.8rem;
  }
  .MyOrder-content{
    padding-top: 0.4rem;
    margin-top: 0.8rem;
    background-color: #fff;
  }
  .m-o-c-t-box{
    background-color: #fff;
    padding: 0.8rem 0 0 0;
    margin-top: 0.4rem;
  }
  .m-o-c-t{
    padding: 0.8rem 0;
    background-color: #f0f2fb;
    
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
    align-items: start;
  }
  .vux-number-selector svg{
    fill: #286fde;
  }
  .ShoppingOrder .weui-cells:before{
    border:0;
  }
  .s-o-express-time{
    margin-top: 0.4rem;
  }

  .s-o-express-time p{
    color: #6b6b6b;
  }
</style>
