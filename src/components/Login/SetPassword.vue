<template>
  <div calss="ActiveAcount">
    <x-header>{{headerTitle}}</x-header>
    <div class="contentBox ActiveAcountBox ">
        <group class="active-mobile" v-if="type === 3" group_top>
          <x-input name="password" type="password" placeholder="请输入原密码" v-model='mobile_psw_old' keyboard="password" required :min="6" :max="20"></x-input>
        </group>
        <group class="active-mobile group_top">
          <x-input name="password" type="password" :placeholder="placeholder_f" v-model='mobile_psw_new' keyboard="password" required :min="6" :max="20"></x-input>
        </group>
        <group class="active-mobile group_top">
          <x-input name="password" type="password" :placeholder="placeholder_s" v-model='mobile_psw_con' keyboard="password" required :min="6" :max="20"></x-input>
        </group>
        <div class="btnLogin btn" @click="setPasw">
          <!-- <span>密码至少8个字符,且同时包含字母和数字</span> -->
          <x-button class="active-submit" type="primary">{{btnText}}</x-button>
        </div>
    </div>
  </div>
  
</template>

<script>
import api from '../../constance/api.js'
import { XInput, Group, XButton, XHeader, cookie } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    XHeader
  },
  data () {
    return {
      post_code:'发送验证码',
      btn_disabled: true,
      btnText:'',
      headerTitle:'',
      type:'',
      placeholder_f:'',
      placeholder_s:'',
      mobile_psw_old:'', //原始密码
      mobile_psw_new:'', //新密码
      mobile_psw_con:'', //确认密码
    }
  },
  methods:{
    //判断类型
    checkType(type){
      switch(type){
        case 2:
          return api.next_psw
          break
        case 1:
          return api.re_psw
          break  
      }
    },
    setPasw(){
      let msg1 = (this.type === 2) ? '正在激活':'正在设置'
      let msg2 = (this.type === 2) ? '激活成功':'设置成功'
      let min = 6,max =20;
      
      if(!this.mobile_psw_new || !this.mobile_psw_con){
        this.toast('密码不能为空')
        return
      }
      if(this.mobile_psw_new.length>=min && this.mobile_psw_new.length <= max){
          if(this.mobile_psw_con === this.mobile_psw_new){
            this.load_show(msg1)
            this.load_hide(2000,function(){
              this.toast(msg2,'success',2000,function(){
                this.$router.push({path:'/'})
              }.bind(this))
            }.bind(this))
          }else{
            this.toast('两次密码不一致')
          }
        }else{
          this.toast('密码必须介于 6 - 20 个字符之间')
        }
      
      
    }
  },
  activated(){
    this.type = this.$router.history.current.query.type
    this.btnText = (this.type === 2) ? '激活':'完成';
    this.placeholder_f = (this.type === 2) ? '请设置登录密码':'请设置新密码'; 
    this.placeholder_s = (this.type === 2) ? '请确认登录密码':'请确认新密码';
    this.headerTitle = (this.type === 2) ? '设置密码':'设置新密码';
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginMain{
    margin-top:2em;
  }
  .btnLogin span{
    display: block;
    font-size: .5em;
    color: #7b7b7b;
    text-align: right;
  }
  .loginMain .btnLogin{
    margin-top:1em;
  }
  
</style>
