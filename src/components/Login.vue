<template>
  <div>
    <header>
      <h2>登录</h2>
      <h3>
        <p v-if='!head_icon'><img src="../assets/img/logo.png"></p>
        <p v-else><img :src="head_icon"></p>
      </h3>
    </header>
    <main class="loginMain">
      <div class="inputBox">
        <group class="group_top group_border group_input">
          <x-input v-model="mobile" type="number" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" @on-blur="handCheckMobile"></x-input>
        </group>
        <group class="group_top group_border group_input">
          <x-input v-model="password"  type="password" placeholder="请输入密码"></x-input>
        </group>
      </div>
      <div class="btnLogin btn">
        <div @click="login">
          <group>
            <x-button type="primary">登录</x-button>
          </group>
        </div>
        <p>
          <span class="setPasw" @click="setAcount(1)">忘记密码</span>
          <span class="active_acount" @click="setAcount(2)">激活账号</span>
        </p>
      </div>
    </main>
    <div v-transfer-dom class="dialog-code">
      <confirm v-model="is_show"
        title="填写图形验证码"
        :input-attrs="{type: 'number'}"
        :close-on-confirm='false'
        @on-confirm="onConfirm_code"
        @on-cancel = "onCancle_code"
        >
        <div class="dialog-code-img">
          <input type="text" v-model='mobile_code_img' class="dialog-code-inp">
          <img :src="code_img" @click="handCodeimg">
        </div>
      </confirm>
    </div>
  </div>
  
</template>
  
<script>
import api from '../constance/api.js'
// import golVux from '@/assets/js/gol-vux'
import Vue from 'vue'
import { XInput, Group, XButton,Selector, ConfirmPlugin,TransferDomDirective as TransferDom,Confirm, cookie, md5} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,
    XButton,
    Group,
    Selector,
    Confirm
  },
  data () {
    return {
      password:'',
      mobile:'',
      code_img:'',
      mobile_code_img:'',
      is_show:false,
      code_string:'',
      head_icon:''
    }
  },
  methods:{
    //headIcon
    headIcon(param){
      
    },
    //正则
    regxMobile(s){
      let r = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,5,6,7,8]{1}\d{8}$|^18[\d]{9}$/
      let reg = new RegExp(r)
      return reg.exec(s)
    },
    //操作 验证手机号
    handCheckMobile(val){
      if(this.regxMobile(val) === null){
        this.toast('请输入正确的手机号')
        return
      }
      let data ={
        mobile: val,
      }
      this.headIcon(data)
    },
    //获取验证码图片
    handCodeimg(){
      this.code_img = this.code_img +'&'+Math.random()*1000
    },
    onConfirm_code(){
      if(!this.mobile_code_img){
        this.toast('请输入图形验证码','text')
        return
      }
      
      this.postCode()
    },
    onCancle_code(){
      this.mobile_code_img = ''
      this.code_string = ''
    },
    postCode(){
      this.$router.push({path:'/home'})
    },
    login(){

      if(!this.mobile){
        this.toast('请输入账号')
        return
      }
      if(this.regxMobile(this.mobile) === null){
        this.toast('请输入正确的手机号')
        return
      }
      if(!this.password){
        this.toast('请输入密码')
        return
      }
      this.postCode()
      // this.$router.push({path:'/home'})
    },
    setAcount(msg){
      if(msg ===2){
        this.$router.push({path:'/Login/activeacount',query:{type:2}})
      }else{
        this.$router.push({path:'/Login/activeacount',query:{type:1}})
      }
     
    }
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    height: 3em;
    font-size: .8em;
    font-weight: normal;
    text-align: center;
    line-height: 3em;
    color:#757575;
    background-color: #fff;
  }
  h3{
    position: relative;
    height: 10em;
    background: url(/static/img/bg.a825768.jpg) no-repeat;
    background-position: 0 62%;
    background-size: cover;

  }
  h3 p{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2em;
    margin:auto;
    padding:4px;
    height: 4em;
    width:4em;
    overflow: hidden;
    background-color: #fff;
    border-radius:50%;
  }
  h3 p img{
    width: 100%;
    height: 100%;
  }
</style>
<style>
  html,body{
    width:100%;
    height:100%;
  }
  .selector .weui-cell__bd:after{
    content: " ";
    display: inline-block;
    -webkit-transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0)!important;
    transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0)!important;
  }
  .group_border .weui-cells:after,.group_border .weui-cells:before{
    content: " ";
    display: inline-block;
    border: 0;

  }
  .group_input input{
    border-left: 1px solid #bcbcbc;
    text-indent:0.8rem;
    height: 1em;
    color: #333;
  }
  .loginMain{
    width: 80%;
    margin: 4em auto;
  }
  .group_top{
    margin-top: .6em;
    border-radius:4px;
  }
  .loginMain .btnLogin{
    margin-top:2em;
  }
  .loginMain .btn .weui-btn_primary{
    background-color: #5e8eda;
    border-radius:4px;
    font-size:1.1rem;
  }
  .loginMain .btnLogin p{
    margin-top:0.2em;
    font-size:0.9rem;
  }
  .loginMain .btnLogin .setPasw{
    color:#999;
    float: left;
  }
  .loginMain .btnLogin .active_acount{
    color:#5e8eda;
    float: right;
  }
  .btnLogin .weui-cells{
    margin-top:.3em;
  }
  .btnLogin .weui-cells{
    margin-top:.3em;
  }
  .vux-header{
    position: fixed;
    padding: 0;
    z-index: 999;
    width: 100%;
    height: 2.7rem;
    background-color: #fff;
    border-bottom: 1px solid #efeeee;
  }
  .vux-header .vux-header-title{
    color: #464646;
  }
  .vux-header .vux-header-left a{
    color:#fff;
  }
  .vux-header-left .left-arrow:before{
    border: 1px solid #6d6b6b;
    top: 9px;
  }
</style>
