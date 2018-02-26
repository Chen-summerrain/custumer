<template>
  <div class="ManageExpress">
    <x-header :left-options="{backText: ''}">
      <span class="title-content">{{headerTitle}}</span>
      <span class="title-right title-right-add" @click="handleAddAddress">+</span>
    </x-header>
    
    <scroller lock-x height="-0">
      <div class="scroller-box-2">
        <div class="contentBox setHomeContent">
          <ul v-for="item in lists">
            <li class="fc">
              <span>收件人</span>
              <span class="fr">12312312312</span>
            </li>
            <li>这是地址哈哈地方哈市的回复哈水电费这是地址哈哈地方哈市的回复哈水电费</li>
            <li class="s-h-c-btn fc">
              <span class="s-h-c-btn-box" @click="handleSetDefaultAddress">
                <i class="s-h-c-btn-icon"><icon type="success-no-circle" v-show="item.show ==1"></icon></i>
                <i>设置为默认地址</i>
              </span>
              <span class="fr" @click="handleSetAddressDelete">删除</span>
              <span class="fr" @click="handleSetAddressEditor">编辑</span>
            </li>
          </ul>
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
      lists:[
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        },
        {
          show:0,
        }
      ]
    }
  },
  methods:{
    //添加新地址
    handleAddAddress(){
      this.$router.push({path:'/Admin/ExpressEditor',query:{type:1}})
    },
    //设置默认地址
    handleSetDefaultAddress(e){
      let setNodes = document.querySelectorAll('.s-h-c-btn-icon .weui-icon')
      setNodes.forEach((item) => {
        item.style.display="none"
      })
      let setNode = e.target.children[0].children[0]
      setNode.style.display= 'inline-block'
    },
    //编辑地址
    handleSetAddressEditor(){
      this.$router.push({path:'/Admin/ExpressEditor'})
    },
    //删除地址
    handleSetAddressDelete(){
      this.confirm('地址删除','您确定要删除该地址吗',function(){
        setTimeout(() => {
          this.toast('删除成功','success')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ManageExpress{
    padding-bottom: 2rem;
  }
  .setHomeContent{
    width: 94%;
    margin: 0 auto;
    color: #646464;
  }
  .setHomeContent ul{
    background-color: #fff;
    padding: 0.6rem;
    border-radius: 8px;
    margin-top: 0.6rem;
  }
  .s-h-c-btn{
    padding-top: 0.2rem;
    margin-top: 0.4rem;
    border-top: 1px solid #e0e0e0;
  }
  .s-h-c-btn-box{
    position: relative;
  }
  .s-h-c-btn-box:after{
    content: '';
    display: inline-block;
    background-color: transparent;
    position: absolute;
    left: 1rem;
    width: 10rem;
    height: 2rem;
  }
  .s-h-c-btn-icon{
    display: inline-block;
    height: 1rem;
    width: 1rem;
    vertical-align: text-bottom;
    border: 1px solid #ccc;
    
  }
  .s-h-c-btn-icon .weui-icon{
    margin-top: -6px;
    margin-left: -4px;
    font-size: 1.2rem;
    color: #09BB07;
  } 
  .s-h-c-btn>span:nth-child(2),.s-h-c-btn>span:nth-child(3){
    font-size: 0.88rem;
    display: inline-block;
    padding:1px 0.3rem 0 2rem;
    color: #ef0000; 
  }
  .s-h-c-btn>span:nth-child(3){
    color: #00acf1;
  }
</style>
<style>
  .contentBox{
    padding-top: 2.7rem;
  }
  /*清除浮动 一*/
  .fc{
    overflow: auto;
    zoom:1;
  }
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
  /*清除浮动二*/
  /*.fc{
    zoom:1;
  }
  .fc:after{
    content:'.';
    display:block;
    clear:both;
    width: 0;
    height: 0;
    visibility:hidden;
  }*/
</style>
