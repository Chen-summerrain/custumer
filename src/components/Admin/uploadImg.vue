<template>
  <div class="setHomeBox">
    <scroller lock-x height="-44">
      <div class="">
        <div class="contentBox setHomeContent">
          <div class="upload-image">
            <my-upload field="img"
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              v-model="show"
              :width=300
              :height=300
              :langExt="langExt"
              noSquare
              noRotate
              url="/upload"
              :params="params"
              :headers="headers"
              img-format="png"></my-upload>
            <!-- <img :src="imgDataUrl"> -->
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import Vue from 'vue'
import myUpload from 'vue-image-crop-upload'
export default {
  components: {
    'my-upload': myUpload
  },
  data () {
    return {
      show: true,
      langExt:{
        preview:'',
        hint:'点击上传图片'
      },
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
          smail: '*_~'
      },
      imgDataUrl: '' 
    }
      
  },
  methods:{
    locationBack(){
      window.history.go(-1)
    },
    toggleShow() {
      // this.show = !this.show;
      const W = document.body.clientWidth,
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
      
      inp.click()
      console.log(inp)
      console.log(el_next1,el_next2,el_save)

      
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field){
        console.log('-------- crop success --------');
        // this.imgDataUrl = imgDataUrl;
    },
    /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    cropUploadSuccess(jsonData, field){
        console.log('-------- upload success --------');
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
        if(status === 404){
          window.history.go(-1)
          self.location = document.referrer
        }
        console.log('field: ' + field);
    }

  },
  activated(){
    // let routers = this.$router.history
    // this.headerTitle = routers.current.meta.title
    console.log(12)
    setTimeout(() => {
      this.toggleShow()
    }, 50)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
<!-- <style>
  /* upload img */
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
</style> -->
