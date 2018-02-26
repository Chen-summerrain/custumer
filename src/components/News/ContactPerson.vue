<template>
  <div class="ContactPerson">
    <x-header>{{headerTitle}}</x-header>
    <scroller lock-x height="-0">
      <div class="scroller-box-5 ">
        <div class="c-p-title">所有联系人</div>
          <div class="c-p-list" v-if="lists.length !=0">
            <p v-for="list in lists" :class="{'c-p-list-check':list.active==0}" @click="handleCheckMembers" :data-id="list.id" :data-active="list.active">
              <span class="c-p-list-check-icon">
                <icon type="circle"></icon>
                <icon type="success"></icon>
              </span>
              <span class="c-p-list-img"></span>
              <span>朱东桌<i v-show="list.active==0">(未激活)</i></span>
            </p>
          </div>
          <div v-if="lists.length ==0" class="c-p-list-none">
            <div class="c-p-list-none-top"><span></span></div>
            <div class="c-p-list-none-bottom"><span>还没有联系人哦,马上去<i @click="handleAddContact">添加+</i></span></div>
          </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    <div v-if="lists.length !=0" :class="['c-p-bottom',{'c-p-bottom-btn': checked.length !=0}]" @click="handleSendContact">转发({{checked.length}})</div>
  </div>

</template>

<script>
import { XHeader, Icon, Scroller} from 'vux'
export default {
  components: {
    XHeader,
    Icon,
    Scroller
  },
  data () {
    return {
      headerTitle:'',
      checked: [],
      lists:[{
        id:1,
        active:1
      },{
        id:2,
        active:0
      },{
        id:3,
        active:1
      },{
        id:4,
        active:1
      },{
        id:5,
        active:1
      },{
        id:6,
        active:1
      },{
        id:7,
        active:1
      },{
        id:8,
        active:1
      },{
        id:9,
        active:1
      },{
        id:10,
        active:1
      },{
        id:11,
        active:1
      }]
      
    }
  },
  methods:{
    //选择联系人操作
    handleCheckMembers(e){
      if(e.target.dataset.active == 0) return false
      let id = e.target.dataset.id
      let icon_1 = e.target.children[0].children[0]
      let icon_2 = e.target.children[0].children[1]
      icon_1.style.display = (icon_1.style.display === "none") ? "inline-block" : "none"
      icon_2.style.display = (icon_1.style.display === "none") ? "inline-block" : "none"
      this.checked.indexOf(id) == -1 ? this.checked.push(id) : this.checked.splice(this.checked.indexOf(id),1)
    },
    //转发联系人
    handleSendContact(){
      if(this.checked.length == 0){
        this.toast('请选择联系人','warn')
      }
    },
    //添加联系人
    handleAddContact(){

    }
  },
  created(){
    console.log(1)
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }
}
</script>
<style>
  .c-p-title{
    position: fixed;
    top: 2.7rem;
    width: 100%;
    z-index: 1;
    height: 2.4rem;
    line-height: 2.4rem;
    text-align: center;
    background-color: #d2def1;
    color: #505050;
  }
  .c-p-list{
    position: relative;
    top: 5.2rem;
    margin-bottom: 3rem;
  }
  .c-p-list p{
    position: relative;
    height: 4rem;
    line-height: 4rem;
    background: #fff;
    border-bottom:1px solid #efefef;
  }
  .c-p-list p:after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    top:0;
    height: 4rem;
    background: transparent;
  }
  .c-p-list-check-icon i:nth-child(2){
    display: none;
  }
  .check i:nth-child(2){
    display: none;
  }
  .check i:nth-child(1){
    display: inline-block;
  }
  
  .c-p-list .c-p-list-check{
    background: #f1f1f1;
  }
  .c-p-list p .weui_icon_success,.c-p-list p .weui_icon_circle{
    margin: 0 1rem;
  }
  .c-p-list-img{
    display: inline-block;
    height: 3rem;
    width: 3rem;
    background: #ccc;
    border-radius: 50%;
    vertical-align: middle;
  }
  .c-p-list p span:last-child{
    margin-left: 1rem;
  }
  .c-p-list p span:last-child i{
    margin-left: 0.5rem;
  }
  .c-p-bottom{
    position: fixed;
    bottom: 0;
    height: 2.4rem;
    width: 100%;
    line-height: 2.4rem;
    text-align: center;
    background-color:#ccc;
    color: #fff;
  }
  .c-p-bottom-btn{
    background-color:#5e8eda;
  }
  .c-p-list-none{
    text-align: center;
  }
  .c-p-list-none-top span{
    margin-top: 25%;
    height: 5rem;
    width: 5rem;
    background-color: #ccc;
    border-radius: 50%;
  }
  .c-p-list-none span{
    display: inline-block;
  }
  .c-p-list-none-bottom span{
    color: #ccc;
  }
  .c-p-list-none-bottom span i{
    padding-left: 0.25rem;
    color: #5e8eda;
    font-size: 1.1rem;
    font-weight: 500;
  }
</style>
