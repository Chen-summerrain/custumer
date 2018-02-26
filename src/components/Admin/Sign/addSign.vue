<template>
  <div class="My-add-sign">
    <x-header :left-options="{backText: ''}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <div class="contentBox MySignBox">
      <scroller lock-x height="-10" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="50">
        <div class="scroller-box">
          <div class="img-box">
            <img :src="imgDataUrl">
          </div>
          <div class="add-sign-icon" @click="toggleShow" v-show="!imgDataUrl">
            <span class="iconfont icon-jiahao"></span>
            <span>添加签名照</span>
          </div>
        </div>
      </scroller>
    </div>
    <div class="upload-image">
            <my-upload field="img"
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              v-model="show"
              :width=300
              :height=300
              :langExt="langExt"
              url="https://****"
              :headers="headers"
              img-format="png"></my-upload>
            </div>
  </div>
<!-- url="https://service.tudingyin.com/client/UserSign/uploadSign" -->
</template>

<script>
import Vue from 'vue'
import api from '../../../constance/api.js'
import { XHeader, Scroller, cookie,md5} from 'vux'
import myUpload from 'vue-image-crop-upload'
export default {
  components: {
    XHeader,
    Scroller,
    cookie,
    'my-upload': myUpload
  },
  // components:{
  //   'my-upload': myUpload
  // },
  data () {
    return {
      headerTitle:'',
      show: false,
      langExt:{
        preview:'',
        hint:'点击上传图片'
      },
      params: {},
      headers: {},
      imgDataUrl: '',
      url:'' 
    }
  },
  methods:{
    locationBack(){
      window.history.go(-1)
    },
    toggleShow() {
      this.show = !this.show;
      let W = document.body.clientWidth,
            H = document.body.clientHeight,
            upload = document.querySelector('.upload-image'),
            inp = upload.querySelector('input'),
            el_upload = upload.querySelector('.vue-image-crop-upload'),
            el_wrap = el_upload.querySelector('.vicp-wrap'),
            el_next1 = el_wrap.querySelector('.vicp-step1 .vicp-operate a'),
            el_next2 = el_wrap.querySelector('.vicp-step2 .vicp-operate a'),
            el_save = el_wrap.querySelector('.vicp-step2 .vicp-operate .vicp-operate-btn');
            el_wrap.style.width = el_upload.style.width = W + 'px'
            el_wrap.style.height = el_upload.style.height = H + 'px'
      console.log(inp)
      inp.click()
      // setTimeout(() => {
        
      // }, 20)
      // console.log(inp)
      // console.log(el_next1,el_next2,el_save)

      
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field){
        console.log('-------- crop success --------');
        this.imgDataUrl = window.HOST + imgDataUrl
    },
    /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    cropUploadSuccess(jsonData, field){
        console.log('-------- upload success --------');
        this.imgDataUrl = window.HOST+jsonData.data
        console.log(this.imgDataUrl)
        console.log(jsonData);
        console.log('field: ' + field);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail(status, field){
        console.log('-------- upload fail --------');
        console.log(status);
        // if(status === 404){
        //   window.history.go(-1)
        //   self.location = document.referrer
        // }
        console.log('field: ' + field);
        console.log(this.headers,'this.headers')
    },
    get_sign(){
      this.apiPost(api.get_sign,{},(data)=>{
        if(data.data.sign_path){
          this.imgDataUrl = window.HOST+data.data.sign_path
        }
        
        console.log(this.imgDataUrl)
        console.log(data)
        
      })
    }
  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
    let token = cookie.get('token').slice(8),
        time = cookie.get('time'),
        session_id = cookie.get('session_id'),
        sign = 'jxf'+ '****';
    this.headers={
      time:time,
      sign:sign,
      sessionid:session_id
    }
    this.get_sign()
    console.log(this.headers,22)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add-sign-icon{
    height: 4rem;
    width: 90%;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 1rem;
    border-radius: 3px;
    text-align: center;
    line-height: 4rem;
    color: #afafaf;
  }
  .img-box{
    height: 10rem;
    text-align: center;
    margin-top: 3rem;
  }
</style>
<style>
  /* upload img */
  .upload-image{
    /*display: none;*/
    /*margin-top:4rem;*/
  }
  .upload-image .vue-image-crop-upload .vicp-wrap{
    box-shadow: none;
    position: fixed;
    z-index: 10000;
    top: 0;
    bottom: 0; 
    left: 0; 
    right: 0; 
    margin: auto; 
    width: 100%; 
    height: 100%; 
    padding: 0; 
    background-color: #fff; 
    border-radius: none; 
    -webkit-animation: vicp 0.12s ease-in;
    animation: vicp 0.12s ease-in;
  }

  .upload-image .vicp-step2{
    width: 100%;
    height: 100%;
    background: #333;
    position: relative;
  }
  .upload-image .vicp-crop-left{
    position: absolute;
    top: 10rem;
    width: 100%;
  }
  .upload-image .vicp-crop-right{
    position: absolute;
    right: 3rem;
    top: 2rem;
  }
  .upload-image .vicp-img-container{
    text-align: center;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-operate{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 2rem;
    background: rgba(0,0,0,.5);
    top: 0;
    left:0;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-operate a{
    width: 3rem;
    padding: 0 1rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-operate .vicp-operate-btn{
    float: right;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container{
    width: 100%;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-img-container img{
    width: 100%;
    height: initial;
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0px;
    margin: auto;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range{
    width: 100%;
    text-align: center;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range input[type=range]{
    display: inline-block; 
    padding-top: 0;
    margin: 0;
    width: 70%;
    height: 2rem;
    vertical-align: top;
    -webkit-appearance: none;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5,
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6{
    width: 2rem;
    height: 2rem;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5{
    left: 4%;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon5::before{
    position: absolute;
    content: '';
    display: block;
    left: 0.6rem;
    top: 0.9rem;
    width: 12px;
    height: 2px;
    background-color: #fff;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6{
    right: 4%;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::before{
    position: absolute;
    content: '';
    display: block;
    left: 0.6rem;
    top: 0.9rem;
    width: 12px;
    height: 2px;
    background-color: #fff;
  }
  .upload-image .vue-image-crop-upload .vicp-wrap .vicp-step2 .vicp-crop .vicp-crop-left .vicp-range .vicp-icon6::after{
    position: absolute;
    content: '';
    display: block;
    top: 0.6rem;
    left: 0.9rem;
    width: 2px;
    height: 12px;
    background-color: #fff;
  }
</style>
