<template>
  <div class="PhoneBookEditor">
    <x-header :left-options="{backText: '取消'}">
      <span class="title-content">{{headerTitle}}</span>
      <span class="title-right" @click="handleEditorPerson">编辑</span>
    </x-header>
    <scroller lock-x height="-20">
      <div class="">
        <div class="p-b-e-detail">
          <p class="p-b-e-detail-name">
            <span></span>
            <span>联系人</span>
          </p>
          <p class="p-b-e-phone">联系电话 <span>123213122</span></p>
          <p class="p-b-e-address">所在地区 <span>had黄飞鸿sad恢复红烧豆腐合适的</span></p>
          <p class="p-b-e-address-detail">详细地址 <span>had黄飞鸿sad恢复红烧豆腐合had黄飞鸿sad恢复红烧豆腐合had</span></p>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    
    <div class="delete-btn" @click="handleDeletePerson">删除</div>
  </div>

</template>

<script>
import { XHeader, Scroller} from 'vux'
export default {
  components: {
    XHeader,
    Scroller
  },
  data () {
    return {
      headerTitle:'',
    }
  },
  methods:{
    //编辑联系人操作
    handleEditorPerson(){
      this.$router.push({path:'/Admin/PhoneBookHome/PhoneBookAdd',query:{type:1}})
    },
    //删除联系人
    handleDeletePerson(){
      this.confirm('删除联系人','您确定要删除该联系人吗',function(){
        this.$router.push({path:'/Admin/PhoneBookHome'})
        setTimeout(() => {
          this.toast('删除成功','text')
        }, 600)
        
      }.bind(this))
    }
  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }

}
</script>
<style scoped>
  .PhoneBookEditor{
    min-height: 50%;
    background-color: #fff;
  }
  .p-b-e-detail{
    padding: 2.7rem 2rem;
    color: #797979;
  }
  .p-b-e-detail-name{
    text-align: center;
  }
  .p-b-e-detail-name span:nth-child(1){
    margin-top: 1.6rem;
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border-radius:50%;
    background-color: #ccc;
  }
  .p-b-e-detail-name span:nth-child(2){
    display: block;
  }
  .p-b-e-phone,.p-b-e-address,.p-b-e-address-detail{
    min-height: 2rem;
    line-height: 2rem;
    padding: 0.8rem 0 0.2rem 0;
    border-bottom:1px solid #efefef;
  }
  .p-b-e-phone span,
  .p-b-e-address span,
  .p-b-e-address-detail span{
    display: inline-block;
    margin-left: 1rem;
    width: 75%;
    vertical-align: top;
  }
  
</style>
<style>
  /*删除按钮*/
  .delete-btn{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #d32424;
    color: #fff;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
</style>
