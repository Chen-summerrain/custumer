<template>
  <div class="ExpressEditor">
    <x-header :left-options="{backText: '取消'}">
      <span class="p-b-title-title">{{headerTitle}}</span>
      <span class="title-right" @click="handleExpressEditor">完成</span>
    </x-header>
    
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox ExpressEditorContent">
          <group class="ExpressEditor-grounp">
            <x-input title="收货人" v-model="express_name" required></x-input>
            <x-input title="联系电话" v-model="express_num" :max="13" is-type="china-mobile" required></x-input>
            <x-address title="所在地区" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址">
            </x-address>
            <x-textarea title="详细地址" :show-counter="false" :rows="1" autosize></x-textarea>
            <x-switch class="border-top border-bottom" title="设为默认地址" v-model="stringValue" @click.native="handleSwitch"></x-switch>
          </group>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    <div class="delete-btn" v-if="headerTitle !== '添加新地址'" @click="handleSetAddressDelete">删除</div>
  </div>

</template>

<script>
import { XHeader, Icon, XInput, Group, XAddress, ChinaAddressV4Data, XButton, Cell, XTextarea, XSwitch, Scroller, Value2nameFilter as value2name  } from 'vux'
export default {
  components: {
    XHeader,
    Icon,
    XInput, 
    Group,
    XAddress, 
    Cell,
    XTextarea,
    XSwitch,
    Scroller
    
  },
  data () {
    return {
      headerTitle:'',
      express_name:'',
      express_num:'',
      express_address_detail: '',
      value:[],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      stringValue: false,
      
    }
  },
  methods:{
    handleSwitch(){
        console.log(this.stringValue)
    },
    //添加联系人
    handleExpressEditor(){
      this.load_show('添加',function(){
        this.load_hide(1000,function(){
          this.$router.push({path:'/Admin/ManageExpress'})
          setTimeout(() => {
            this.toast('添加成功','text')
          }, 800)
        }.bind(this))
      }.bind(this))
      
    },
    //设置所在地区
    onShadowChange(ids, names){
      // console.log(ids, names)
    },
    //删除地址
    handleSetAddressDelete(){
      this.confirm('地址删除','您确定要删除该地址吗',function(){
        this.toast('删除成功','success')
        setTimeout(() => {
          this.$router.push({path:'/Admin/ManageExpress'})
        }, 600)
        
      }.bind(this))
    }
    
  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
    this.headerTitle = routers.current.query.type==1 ? '添加新地址' : this.headerTitle
  }

}
</script>
<style scoped>
  .ExpressEditor{
    height: 100%;
    background: #fff;
  }
  .ExpressEditorContent{
    width: 94%;
    margin: auto;
    color: #7d7d7d;
  }
</style>
<style>
  .ExpressEditor .vux-header .vux-header-left .vux-header-back{
    color: #7d7d7d;
    padding: 0;
  }
  .ExpressEditor .vux-header-left .left-arrow{
    display: none;
  }
  .ExpressEditor .weui-cells{
    margin-top: 1rem;
  }
  .ExpressEditor .weui-cells:before,
  .ExpressEditor .weui-cells:after{
    border-width: 0;
  }
  .ExpressEditor .weui-cell_switch:after{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
  }
</style>
