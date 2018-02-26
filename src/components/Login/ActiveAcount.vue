<template>
  <div calss="ActiveAcount">
    <x-header>{{headerTitle}}</x-header>
    <div class="contentBox ActiveAcountBox">
        <group class="active-mobile group_top">
          <x-input name="mobile" type="number" v-model='mobile_val' :placeholder="placeholder_f"  is-type="china-mobile" required></x-input>
        </group>
        <group class="active-code-box group_top">
          <x-input class="weui-vcode" v-model='mobile_code' type="number" placeholder='请输入手机验证码'></x-input>
          <div @click="handCode" class="active-code">
            <button>{{post_code}}</button>
          </div>
        </group>
        <x-button class="active-submit" type="primary" @click.native="nextStep">下一步</x-button>
      </div>
      <div v-transfer-dom class="dialog-code">
        <confirm v-model="is_show"
          title="填写图形验证码"
          :input-attrs="{type: 'number'}"
          :close-on-confirm='false'
          @on-confirm="onConfirm_code"
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
import { XInput, Group, XButton, XHeader,ConfirmPlugin,TransferDomDirective as TransferDom,Confirm} from 'vux'
import api from '../../constance/api.js'
export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,
    XButton,
    Group,
    XHeader,
    Confirm
    
  },
  data () {
    return {
      post_code:'发送验证码',
      btn_disabled: true,
      headerTitle: '',
      type:'',
      placeholder_f:'请输入手机号',
      mobile_val:'',
      mobile_code:'',
      mobile_code_img: '', //输入验证码
      code_img: '', //验证码图片
      is_show:false,
    }
  },
  methods:{
    //判断类型
    checkType(type){
      switch(type){
        case 2:
          return 'activation'
          break
        case 1:
          return 'retrieve'
          break  
      }
    },
    handCode(e){
      if(!this.mobile_val){
        this.toast('请输入手机号')
        return
      }
      this.mobile_code_img = ''
      
      this.postCode()
      this.el_btn = e.target 
      console.log(this.el_btn,'sss') 
    },
    hangSendBtn(el){
      el.style.background="#ccc"
      el.disabled = 'false'
      let num = 120
      let timer = setInterval(function(){
        this.post_code = '('+ num +'s'+')重新发送'
        num--
        if(num ===0){
          clearInterval(timer)
          el.style.background="#1AAD19"
          el.disabled = ''
          this.post_code = '重新发送'
        }
      }.bind(this),1000) 
    },
    //获取验证码图片
    handCodeimg(){
      this.code_img = this.code_img +'&'+Math.random()*1000
      console.log(this.code_img,'this.code_img')
    },
    onConfirm_code(){
      if(!this.mobile_code_img){
        this.toast('请输入图形验证码','text')
        return
      }
      this.postCode()
    },
    postCode(){
      
    },
    nextStep(){
      if(!this.mobile_val){
        this.toast('请输入手机号')
        return
      }
      if(!this.mobile_code){
        this.toast('请输入手机验证码')
        return
      }
      this.$router.push({path:'/Login/SetPassword',query:{type:this.type}});
      // this.$router.push({path:'/Login/SetPassword',query:{type:this.type}});

      
      // this.type ===3 && this.$router.push({path:'/'})
    },
  },
  activated(){
    this.type = this.$router.history.current.query.type;
    switch(this.type){
      case 1:
        console.log(this.type,'this.type')
        this.headerTitle = '找回密码'
        break;
      case 2:
        console.log(this.type,'this.type')
        this.headerTitle = '激活账号'
        break;
      case 3:
        console.log(this.type,'this.type')
        this.headerTitle = '绑定新手机号'
        break;  
    }
    
  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .ActiveAcountBox{
    width: 80%;
    margin:auto;
  }
  .active-mobile .weui-cells,.active-code-box .weui-cells{
    border-radius:10px;
    border:1px solid #D9D9D9;
  }
  .active-code-box .weui-cells{
    border-radius:0;
    background-color: transparent;
    border:none;
  }
  .active-mobile .weui-cells:before,
  .active-code-box .weui-cells:before,
  .active-mobile .weui-cells:after,
  .active-code-box .weui-cells:after{
    border: none;
  }
  .active-submit{
    margin-top: 1rem;
    background-color: #5e8eda;
  }
  .ActiveAcountBox .weui-cell__bd input{
    text-indent: 0.4rem;
  }
  .ActiveAcountBox .weui-cell__bd:before{
    content: '';
    display: inline-block;
    position: absolute;
    height: 1rem;
    width: 1px;
    background-color: #7b7b7b;
    top: 1rem;

  }
  .weui-vcode{
    width: 8rem;
    float: left;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #D9D9D9;

  }

  .active-code{
    width: 7rem;
    float: right;
    margin-top: 2px;
    height: 2.8rem;
    border-radius: 8px;
    overflow: hidden;
  }
  .active-code{

  }
  .active-code button{
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 2.8rem;
    background: #2fd67b;
    color: #fff;
    font-size: .9rem;
    border:0;
  }
  .active-code img{
    width: 100%;
    height: 100%;
  }
  .dialog-code .vux-x-dialog-absolute .weui-dialog{
    background-color: #ececec;
  }
  .dialog-code-img{
    padding: 3px 0;
    background-color: #fff;
    color: #5d5d5d;
  }
  .dialog-code-img input{
    width: 50%;
    height: 1.4rem;
    border: 0;
    outline: none;
    text-indent: 10px;
    font-size: 1.1rem;
    color: #717171;
  }
  .dialog-code-img img{
    width: 46%;
    height: 2rem;
    vertical-align: middle;
  }
</style>
