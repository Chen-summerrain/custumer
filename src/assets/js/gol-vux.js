/**
 * vux 全局方法
 */

import Vue from 'vue'

import { 
	DatetimePlugin, CloseDialogsPlugin, ConfigPlugin, BusPlugin, LocalePlugin, DevicePlugin,XButton,md5,
	ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin,cookie,base64
} from 'vux'

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' //
})
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)

Vue.prototype.$http.defaults.baseURL ="https://service.****.com/"
Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/json'
// Vue.prototype.$http.defaults.headers = headers



//ajax post
// 17625605657 15967106059
Vue.prototype.apiPost = function(url,params,cb){
    var headers ={}
    if(cookie.get('token')){
    var token = cookie.get('token').slice(8),
        time = cookie.get('time'),
        session_id = cookie.get('session_id'),
        sign = 'jxf'+ "*****",
        headers={
          time:time,
          sign:sign,
          sessionid:session_id
        };
    }
    Vue.prototype.$http.defaults.headers = headers
    setTimeout(() => {
      Vue.http.post(url, params).then((res) => {
        switch(res.data.code){
            case -2:
                _g.toast(res.data.message,'text',2000)
            break;
            default:
                cb && cb(res.data)
            break;
        }
    }, 50)
    
  })
}

//cookie
Vue.prototype.CookieData = function(param,data){
    cookie.set(param,data)
}
//base64
Vue.prototype.base64_en = function(str){
    return base64.encode(str)
}
//base64
Vue.prototype.base64_de = function(str){
    return base64.decode(str)
}
//md5
Vue.prototype.md5 = function(str){
    return md5(str)
}




//封装组件方法
  //loading
Vue.prototype.load_show = function(msg,cb){
	this.$vux.loading.show({
       text: msg || 'Loading' 
    })
    cb && cb()
}
Vue.prototype.load_hide = function(t,cb){
	setTimeout(() => {
        this.$vux.loading.hide()
        setTimeout(() => {
    	   cb && cb()
    	},300)
    },t || 2000)
    
}
  //alert
Vue.prototype.alert = function(msgT,msgC,cb,t){
	this.$vux.alert.show({
        title: msgT || ' ',
        content: msgC || '提示内容',
    })
    setTimeout(() => {
        this.$vux.alert.hide()
        cb && cb()
    },t || 2000)
}
 //toast type= success, warn, cancel, text
Vue.prototype.toast = function(msg,type,t,cb){
	this.$vux.toast.show({
        text: msg || ' ',
        type: type || 'text',
    })
    setTimeout(() => {
        this.$vux.toast.hide()
        cb && cb()
    },t || 1000)
}
 //confirm
Vue.prototype.confirm = function(title,con,cb){
	this.$vux.confirm.show({
	  title: title || '标题',
	  content: con || '内容',
	  onConfirm () {
	    cb && cb()
	  }
	})
}