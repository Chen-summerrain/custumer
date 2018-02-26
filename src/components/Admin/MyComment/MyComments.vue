<template>
  <div class="MyComments">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <scroller lock-x height="-0" @on-scroll-bottom="onScrollBottom" :scroll-bottom-offst="200">
      <div class="scroller-box-2">
        <div class="contentBox MyCommentsContent">
          <swipeout v-for="i in 20" @click="handleNewsDetails" class="m-c-c-contentBox">
            <swipeout-item transition-mode="follow">
              <div slot="right-menu">
                <swipeout-button type="warn">删除</swipeout-button>
                <swipeout-button type="default">忽略</swipeout-button>
              </div>
              <div slot="content" style="padding:12px 6px 10px 16px;" class="">
                <p class="m-c-c-title">
                  <span>这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</span>
                  <span v-show="true">店家已读</span>
                  <span v-show="false">店家未读</span>
                </p>
                <p class="m-c-c-content">
                  这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
                </p>
              </div>
            </swipeout-item>
          </swipeout>
        </div>
      </div>
      <!-- <load-more tip="loading"></load-more> -->
    </scroller>
  </div>
</template>

<script>
import { XHeader, Scroller, LoadMore, Swipeout, SwipeoutItem, SwipeoutButton, TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Scroller, 
    LoadMore,
    Swipeout, 
    SwipeoutItem, 
    SwipeoutButton,
  },
  data () {
    return {
      headerTitle:''
    }
  },
  methods:{
    onScrollBottom(){

    },
    handleNewsDetails(){

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
  .MyCommentsContent{
    color: #6b6b6b;
    width: 94%;
    margin:auto;
    margin-bottom: 2rem;
  }
  
  .m-c-c-title span:nth-child(1){
    display: inline-block;
    vertical-align: top;
    overflow:hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    color: #000;
    width: 80%;
  }
  .m-c-c-title span:nth-child(2){
    font-size: 0.9rem;
    color: #adadad;
  }
  .m-c-c-title span:nth-child(3){
    font-size: 0.9rem;
    color: #5e8eda;
  }
  .m-c-c-contentBox{
    margin-top: 0.8rem;
    border-radius:6px;
    overflow: auto;
  }
</style>
<style>
  
</style>
