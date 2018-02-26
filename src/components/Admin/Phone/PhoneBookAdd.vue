<template>
  <div class="PhoneBookAdd">
    <x-header :left-options="{backText: '取消'}">
      <span class="p-b-title-title">{{headerTitle}}</span>
      <span class="title-right" @click="handleAddContact">完成</span>
    </x-header>
    <scroller lock-x height="-40">
      <div class="">
        <div class="p-b-details">
          <div class="p-b-details-name-box">
            <div class="p-b-details-img"></div>
            <group class="p-b-details-name">
              <x-input class="p-b-details-n-inp" v-model="phone_name" required></x-input>
            </group>
          </div>
          <div class="p-b-details-phone">
            <group>
              <x-input title="联系电话" v-model="phone_num" :max="13" is-type="china-mobile" required></x-input>
            </group>
          </div>
          <div class="p-b-details-address">
            <group>
              <x-address title="所在地区" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址">
              </x-address>
            </group>
          </div>
          <div class="p-b-details-address-detail">
            <group>
              <x-textarea title="详细地址" :show-counter="false" :rows="1" autosize></x-textarea>
            </group>
          </div>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    
  </div>

</template>

<script>
import { XHeader, Icon, XInput, Group, XAddress, ChinaAddressV4Data, XTextarea, Scroller, Value2nameFilter as value2name  } from 'vux'
export default {
  components: {
    XHeader,
    Icon,
    XInput, 
    Group,
    XAddress, 
    XTextarea,
    Scroller,
    
  },
  data () {
    return {
      headerTitle:'',
      phone_name:'新增',
      phone_num:'',
      phone_address_detail: '',
      value:[],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      
    }
  },
  methods:{
    //添加联系人
    handleAddContact(){
      this.load_show('添加',function(){
        this.load_hide(1000,function(){
          this.$router.push({path:'/Admin/PhoneBookHome'})
          setTimeout(() => {
            this.toast('添加成功','text')
          }, 800)
        }.bind(this))
      }.bind(this))
      
    },
    onShadowChange(ids, names){
      // console.log(ids, names)
    },
    
  },
  created(){
    let routers = this.$router.history
    console.log(routers)
    this.headerTitle = routers.current.meta.title
    this.headerTitle = routers.current.query.type==1 ? '编辑联系人' : this.headerTitle
  }

}
</script>
<style scoped>
  .PhoneBookAdd{
    height: 100%;
    background: #fff;
  }
  .p-b-details{
    position: relative;
    top: 2.6rem;
    padding-left: 2rem;
    padding-right: 1rem;
  }
  .p-b-details-img{
    display: inline-block;
    margin-top: 1rem;
    height: 5rem;
    width: 5rem;
    border-radius:50%;
    background-color: #ccc;
  }
  .p-b-details-name{
    width: 72%;
    float: right;
    margin-top: 3rem;
  }
</style>
<style>
  .PhoneBookAdd .vux-header .vux-header-left .vux-header-back{
    color: #7d7d7d;
    padding: 0;
  }
  .PhoneBookAdd .vux-header-left .left-arrow{
    display: none;
  }
  .p-b-details .weui-cells,.p-b-details .vux-no-group-title{
    margin-top: 0;
  }
  .p-b-details .weui-cells:before,.p-b-details .vux-cell-box:before{
    border:0;
  }
  .p-b-details-address .weui-cell_access .weui-cell__ft:after{
    margin-top: -2px;
    right: -4px;
  }
  .p-b-title-title{
    font-size: 1rem;
    font-weight: 600;
  }
  .p-b-title-more{
    position: absolute;
    right: 1rem;
    font-size: 1rem;
    color: #676767;
  }
</style>
