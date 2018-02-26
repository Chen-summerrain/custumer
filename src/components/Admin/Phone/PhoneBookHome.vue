<template>
  <div class="PhoneBook">
    <!-- <x-header>{{headerTitle}}</x-header> -->
    <x-header :left-options="{showBack: true,}">
      <span class="title-content">{{headerTitle}}</span>
      <span class="title-right title-right-add" @click="handleAddContact">+</span>
    </x-header>
    <scroller lock-x height="-0" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="scroller-box-5">
        <div class="c-p-list" v-if="lists.length !=0">
          <p v-for="list in lists" :class="{'c-p-list-check':list.active==0}" @click="handleEditorPerson" :data-id="list.id" :data-active="list.active">
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
    
  </div>

</template>

<script>
import { XHeader, Icon, Scroller } from 'vux'
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
    handleEditorPerson(e){
      this.$router.push({path:'/Admin/PhoneBookHome/PhoneBookEditor'})
    },
    //添加联系人
    handleAddContact(){
      this.$router.push({path:'/Admin/PhoneBookHome/PhoneBookAdd'})
    },
    onScrollBottom(){

    }
  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }
}
</script>
<style scoped>
  .c-p-list{
    top: 2.7rem;
  }
  .c-p-list p{
    height: 5rem;
    line-height: 5rem;
  }
  .c-p-list-img{
    margin-left: 2rem;
    height: 3.8rem;
    width: 3.8rem;
  }
</style>

