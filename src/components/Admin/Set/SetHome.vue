<template>
  <div class="setHomeBox">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox setHomeContent">
          <!-- <p>
            <span></span>
            <span>哈哈哈</span>
          </p> -->
          <group class="s-h-list">
            <cell class="s-h-list-img" title="头像" @click.native="handSetImge" is-link>
              <p><img src=""></p>
            </cell>
            <cell title="昵称" value="ccc" @click.native="handSetName" is-link></cell>
            <popup-picker title="性别" :data="sexlist" v-model="sex" @on-change="onChange"></popup-picker>
            <!-- <cell title="性别" value="男" @click.native="handSetSex"></cell> -->
          </group>
        </div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader, Cell, Group, Badge, Scroller, PopupPicker} from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    Badge, 
    Scroller,
    PopupPicker,
  },
  data () {
    return {
      headerTitle:'',
      sexlist:[['男','女']],
      sex:['男'],
    } 
  },
  methods:{
    handSetImge(){
      this.$router.push({path:'/Admin/UploadImg'})
    },
    handSetName(){
      this.$router.push({path:'/Admin/SetHome/AdminName'})
    },
    handSetSex(){ 

    },
    onChange(val){
      console.log(val)
    }
    

  },
  activated(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
    console.log(11)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .setHomeContent{
    color: #6b6b6b;
  }
  .s-h-list-img p{
    height: 2rem;
    width: 2rem;
  }
  .s-h-list-img p img{
    height: 100%;
    width: 100%;
  }
  .s-h-list-img{
    height: 3rem;
  }

  
</style>
<style>
  .s-h-c-acount .weui-cells{
    margin-top: 0.3rem;
  }
 
</style>
