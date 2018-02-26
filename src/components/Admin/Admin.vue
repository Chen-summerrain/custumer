<template>
  <div class="adminBox">
    <x-header :left-options="{showBack: false}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox AdminContent">
          <group class="s-h-admin">
            <cell :link="{path:'/Admin/SetHome'}">
              <span slot="title">
                <span class="s-h-admin-img"></span>
                <span class="s-h-admin-name">
                  <i>未设置</i>
                  <i>159****6059</i>
                </span>
              </span>
            </cell>
            <cell title="账户安全" :link="{path:'/Admin/AcountSetHome'}"></cell>
          </group>
          <group class="s-h-list">
            <cell title="订单(待移)" :link="{path:'/Admin/MyOrder'}"></cell>
            <cell title="我要寄件(待移)" :link="{path:'/Admin/MyExpress'}"></cell>
            <cell title="取寄件地址" :link="{path:'/Admin/ManageExpress'}"></cell>
            <cell title="通讯录" :link="{path:'/Admin/PhoneBookHome'}"></cell>
            <cell title="评价" :link="{path:'/Admin/MyComments'}"></cell>
            <cell title="电子签名" :link="{path:'/Admin/MySignAdd'}"></cell>
          </group>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
    
  </div>
</template>

<script>
import { XHeader, Cell, CellFormPreview, Group, Scroller } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    Scroller,
    CellFormPreview
  },
  data () {
    return {
      headerTitle:''
    }
  },
  methods:{

  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .AdminContent{
    color: #6b6b6b;
  }
  .s-h-admin{
    /*height: 7rem;*/
  }
  .s-h-admin-img{
    display: inline-block;
    vertical-align: middle;
    height: 5rem;
    width: 5rem;
    border-radius:50%;
    background-color: #ccc;
  }
  .s-h-admin-name{
    display: inline-block;
    margin-left: 1rem;
    vertical-align: middle;
  }
  .s-h-admin-name i{
    display: block;
    width: 8rem;
    line-height: 1.5rem;
  }
  .s-h-list{
    margin-top: 0.422rem;
  }
</style>
<style>
  .AdminContent .weui-cells{
    margin-top: 0;
  }
  .AdminContent .s-h-admin .weui-cells:before{
    border:0;
  }
  .AdminContent .s-h-admin .weui-cells{
    /*height: 100%;
    line-height: 6rem;*/
  }
</style>
