<template>
  <div class="setHomeBox">
    <x-header>
      <span class="p-b-title-title">{{headerTitle}}</span>
      <span class="title-right" @click="handComfirm">完成</span>
    </x-header>
    <scroller lock-x height="-40">
      <div class="">
        <div class="contentBox">
          <p class="set-name">
            <input type="text" v-model="set_name">
            <span>亲,请设置个帅气的名字吧</span>
          </p>
        </div>
      </div>
    </scroller>
    
  </div>

</template>

<script>
import { XHeader, XInput, Group, Scroller} from 'vux'
export default {
  components: {
    XHeader,
    Scroller,
    
  },
  data () {
    return {
      headerTitle:'',
      set_name:'chy'
    }
  },
  methods:{
    //添加联系人
    handComfirm(){
      
      // window.location = document.referrer //刷新
      window.history.go(-1);//正常返回,不刷新
      // window.history.back();//同上
      // window.history.forward();//同上
      // this.load_show('添加',function(){
      //   this.load_hide(1000,function(){
          
      //     // setTimeout(() => {
      //     //   this.toast('添加成功','text')
      //     // }, 800)
      //   }.bind(this))
      // }.bind(this))
      
    },
    onShadowChange(ids, names){
      // console.log(ids, names)
    },
    
  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
    
  }

}
</script>
<style scoped>
  .set-name{
    width:88%;
    color:#ccc;
    font-size: 0.9rem;
    margin:0.2rem auto;
  }
  .set-name input{
    display: block;
    width: 100%;
    border: none;
    outline: none;
    color:#333;
    font-size: 1.1rem;
    height: 1.8rem;
    background-color: transparent;
    border-bottom: 1px solid green;
  }
</style>
<style>
  
</style>
