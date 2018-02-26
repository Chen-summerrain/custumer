<template>
  <div class="MyExpress">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox MyExpressBox">
          <group class="s-h-list-top">
            <cell title="取件方式" value="请选择" is-link></cell>
            <cell title="寄件类型" value="请选择" is-link></cell>
            <cell title="寄件品牌" value="请选择" is-link></cell>
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
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
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
  .MyExpressBox{
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
  .MyExpressBox .s-h-list-top .weui-cells{
    margin-top:-0.2rem;
  }
</style>
