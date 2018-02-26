<template>
  <div class="NewsDetails">
    <x-header>{{headerTitle}}</x-header>
    
    <scroller lock-x height="-0">
      <div class="">
        <div class="news-details-content">
          <h2>这是信息标题这是信息标题这是信息标题这是信息标题这是信息标题</h2>
          <p>这是信息标题这是信息标题这是信息标题这是信息标题这是信息标题这是信息标题这是信息标题这是信息标题</p>
          <div>发送于<span>2017-10-25 18:12</span></div>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader, Scroller } from 'vux'
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
  created(){
    var routers = this.$router.history
    this.headerTitle = routers.current.meta.title
    console.log(routers)
    console.log(this.headerTitle)
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .NewsDetails{
    height:100%;
    overflow: hidden;
  }
  .NewsDetails .vux-header{
    position: fixed; 
    top:0;
    padding: 0;
    width: 100%;
  }
  .news-details-content{
    padding: .4rem;
    margin-top: 12%;
    height: 94%;
    color:#3e3d3d;
    background: #fff;
  }
  .news-details-content h2{
    padding-bottom: 0.4rem;
    margin: 0 auto 0.6rem;
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
    width: 90%;
    border-bottom: 1px solid #e8e8e8;
    
  }
  .news-details-content p{
    margin: 0 auto;
    width: 90%;
    font-size: 1rem;
    color: #868686;
  }
  .news-details-content>div{
    width: 90%;
    margin-top: 1.6rem;
    color: #b5b4b4;
    font-size: 0.7rem;
    text-align: right;
  }
</style>
<style>
  .NewsDetails .xs-container,
  .NewsDetails .xs-container>div,
  .NewsDetails .news-details-content{
    height: 100%;
  }
</style>

