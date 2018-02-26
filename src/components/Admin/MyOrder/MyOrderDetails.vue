<template>
  <div class="MyOrderDetail">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox MyOrderBox">
          <div class="MyOrder-title">订单已完成</div>
          <group class="s-h-list-top">
            <cell title="取件方式" value="item"></cell>
            <cell title="送件方式" value="店家配送"></cell>
          </group>
          <div class="express">
            <ul>
              <li>
                <span>取件人</span>
                <span class="fc">哈哈哈<i class="fr">13132334332</i></span>
              </li>
              <li>
                <span>取件地址</span>
                <span>这是地址地址这是地址地址这是地址地址这是地址地址这是地址地址</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>取件人</span>
                <span class="fc">哈哈哈<i class="fr">13132334332</i></span>
              </li>
              <li>
                <span>取件地址</span>
                <span>这是地址地址这是地址地址这是地址地址这是地址地址这是地址地址</span>
              </li>
            </ul>
          </div>
          <div class="MyOrder-content">
            <div class="m-o-c-t fc">
              <div class="m-o-c-t-img fl"></div>
              <div class="m-o-c-t-tit fr">
                <span>这是标题这是标题这是标题这是标题这是标题这是标题</span>
                <span>这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</span>
                <span>X 1</span>
              </div>
            </div>
          </div>
          <group class="s-h-list">
            <cell title="购买数量" value="1"></cell>
            <cell title="要货时间" value="2小时"></cell>
            <cell title="制作要求" is-link value="已选择" @click.native="handleOrderDetail"></cell>
          </group>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    <div v-transfer-dom class="p-details-show">
      <popup v-model="detalis_show" position="bottom" height="50%">
        <div class="p-d-show-top">
          <div>制作要求</div>
          <ul>
            <li>
              <span>打印颜色</span>
              <span>黑白</span>
            </li>
            <li>
              <span>单双面</span>
              <span>单面</span>
            </li>
            <li>
              <span>内页纸张</span>
              <span>复印纸80g</span>
            </li>
            <li>
              <span>封面覆膜</span>
              <span>无</span>
            </li>
          </ul>
        </div>
        <div class="p-d-show-btn" @click="handleProductClose">完成</div>
      </popup>
    </div>
  </div>
</template>

<script>
import { XHeader, Cell, CellFormPreview, Group, TransferDom, Popup, Scroller} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Cell, 
    CellFormPreview, 
    Group,
    TransferDom, 
    Popup,
    Scroller
  },
  data () {
    return {
      headerTitle:'',
      item:'ss',
      detalis_show: false,
    }
  },
  methods:{
    handleOrderDetail(){
      this.detalis_show = !this.detalis_show
    },
    handleProductClose(){
      this.detalis_show = !this.detalis_show
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
  .MyOrder-title{
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    background: #0578de;
    padding-left: 4%;
  }
  .MyOrderBox{
    color: #6b6b6b;
  }
  .express{
    margin-top: 0.3rem;
    padding: 0.5rem 0 0 0;
    background-color: #fff;
  }
  .express ul{
    padding: 0 1rem;
    padding-top: 0.5rem;
  }
  .express ul li span:nth-child(1){
    display: inline-block;
    width: 20%;
  }
  .express ul li:nth-child(1) span i{
    font-size: 1rem;
  }
  .express ul li span:nth-child(2){
    display: inline-block;
    margin-left: 1rem;
    vertical-align: top;
    width: 74%;
  }
  .express ul li:nth-child(2){
    padding-bottom: 0.5rem;
  }
  .express ul:nth-child(1){
    border-bottom: 1px solid #D9D9D9;
    
  }
  .MyOrder-content{
    padding: 0.4rem 0;
    margin-top: 0.5rem;
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
  .m-o-c-t-tit span{
    display: block;
    line-height: 1rem;
    font-size: 1rem;
  }
  .m-o-c-t-tit span:nth-child(2){
    font-size: 0.9rem;
    margin-top: 0.4rem;
  }
  .m-o-c-t-tit span:nth-child(1){
    color: #3a3a3a;
  }
  .m-o-c-t-tit span:nth-child(3){
    color: #3a3a3a;
    text-align: right;
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
  .MyOrderDetail .s-h-list-top .weui-cells{
    margin-top:0;
  }
</style>
