import Vue from 'vue'
export default (function () {
	Vue.filter('numToString', function (value) {
		const string = value.toString()
		return string
	})
	Vue.filter('stringToNum', function (value) {
		const num = Number(value)
		return num
	})
	Vue.filter('isEmptyObject', function (value) {
		for (var name in value){
			return false;//返回false，不为空对象
		}
		return true;//返回true，为空对象
	})
    Vue.filter('storeType', function (value) {
        if (value == 0) {
            return '直营'
        } else if (value == 1) {
            return '加盟'
        }
    })
	Vue.filter('chargeMode', function (value) {
		if (value == 0) {
			return '按面积'
		} else if (value == 1) {
			return '自定义'
		}
	})
    Vue.filter('rules', function (value) {
        return value
    })
    Vue.filter('fileLink', function (value) {
        const link = window.imgUrl + value
        return link
    })
    Vue.filter('dataType', function (value) {
        let type = ''
        if (value == 1) {
            type = '客户行业'
        } else if (value == 2) {
            type = '客户来源'
        } else if(value == 3) {
            type = '发票类型'
        } else if(value == 4) {
            type = '业务类型'
        }
        return type
    })
    Vue.filter('time', function (value) {
        let date=''
        let day = moment.unix(value)
        if(value==0){
          date='空'
		}else{
            date= moment(day).format('YYYY-MM-DD H:mm:ss')
		}


        return date
        
    })
    Vue.filter('time2', function (value) {
    	if(value !=0){
    		let day = moment.unix(value)
        	let date = moment(day).format('YYYY-MM-DD H:mm:ss')
        	return date
    	}else{
    		return '未收银'
    	}
        
    })
    Vue.filter('date', function (value) {
        let day = moment.unix(value)
        let date = moment(day).format('YYYY-MM-DD')
        return date
    })
    //单双面
    Vue.filter('is_double',function (value) {
        let is_double=''
        if(value==1){
            is_double='单面'
        }else if(value == 2){
            is_double='双面'
        }
        return is_double
    })
    Vue.filter('is_marry',function (value) {
        let is_marry=''
        if(value==0){
            is_marry='未婚'
        }else{
            is_marry='已婚'
        }
        return is_marry
    })
    Vue.filter('sex',function (value) {
        let sex=''
        if(value==0){
            sex='女'
        }else if(value==1){
            sex='男'
        }
        return sex
    })
    Vue.filter('getTime',function (value) {
        let time='';
        if(value){
            time=new Date(parseInt(value) * 1000).format('yyyy-MM-dd');
        }else if(value==0){
            time= '无';
        }
        return time;
    })
    Vue.filter('customer_type',function (value) {
        let type='';
        if(value==0){
            type='签约客户'
        }else if(value==1){
            type='会员卡客户'
        }else if(value==2){
            type='潜在客户'
        }else if(value==3){
            type='门市客户'
        }
        return type;
    })
	Vue.filter('discount_type',function (value) {
		let type='';
		if(value==0){
			type='协议价'
		}else if(value==1){
			type='会员折扣'
		}else if(value==2&&value==3){
			type='无'
		}
		return type;
	})
	Vue.filter('order_status',function (value) {
		let type='';
		if(value==0){
			type='已开单'
		}else if(value==1){
			type='打印中'
		}else if(value==2){
			type='打印完成'
		}else if( value == 3){
			type = '已完工'
		}else if( value == 4){
			type = '收银中'
		}else if( value == 5){
			type = '已收银'
		}
		return type;
	})
	Vue.filter('pay_status',function (value) {
		let type='';
		if(value==0){
			type='未支付'
		}else if(value==1){
			type='已支付'
		}else if(value==2){
			type='已到账'
		}else if(value == 3){
			type='已失效'
		}else if(value===4){
			type="未消费"
		}else if(value===5){
			type="已消费"
		}
		return type;
	})
	Vue.filter('message_status',function(value){
		let type='';
		if(value==0){
			type="未读消息"
		}else if(value==1){
			type="已读消息"
		}
		return type
	})
    Vue.filter('message_type',function(value){
        let type='';
        if(value==1){
            type="开账户消息"
        }else if(value==2){
            type="异常消息"
        }else if(value==3){
        	type="正常业务消息"
		}else if(value==4){
        	type="账单消息"
		}else if(value==5){
			type="其他消息"
		}
        return type
    })
	Vue.filter('methodName',function (value) {
		let type='';
		if(value==0){
			type='现金'
		}else if(value==1){
			type='支付宝'
		}else if(value==2){
			type='微信'
		}else if( value == 3){
			type = '银联'
		}else if(value == 4){
			type = '支票'
		}else if(value == 5){
			type = '余额'
		}else if(value == 6){
			type = '会员卡余额'
		}else if(value == 8){
			type = '挂账'
		}
		return type;
	})
	Vue.filter('directName',function (value) {
		let type='';
		if(value==0){
			type='前台钱箱'
		}else if(value==1){
			type='支付宝'
		}else if(value==2){
			type='微信'
		}else if( value == 3){
			type = '银联'
		}else if(value == 4){
			type = '支票'
		}
		return type;
	})
	Vue.filter('payType',function (value) {
		let type='';
		if(value=='wx_pub_qr'){
			type='微信'
		}else if(value=='alipay_pc_direct'){
			type='支付宝'
		}else if(value==="sms"){
			type='短信消费'
		}else if(value==='EMS'){
			type='EMS快递消费'
		}else if(value==="zhongtong"){
			type="中通快递消费"
		}else if(value==="yousu"){
			type="优速快递消费"
		}else if(value==='yuantong'){
			type="圆通快递消费"
		}else if(value==="zjs"){
			type="宅急送消费"
		}else if(value==="debang"){
			type="德邦物流消费"
		}else if(value==='huitong'){
			type="百世汇通消费"
		}else if(value==="shunfeng"){
			type="顺丰快递消费"
		}else if(value==="dada"){
			type="达达速递消费"
		}
		return type;
	})
	Vue.filter('method',function (value) {
		let method='';
		if(value===0){
			method='充值'
		}else{
			method='消费'
		}
		return method;
    })


	Vue.filter('fixed',function(value){
		return value.toFixed(2)
	})
	//支票号
	Vue.filter('check',function(value){
		if(value){
			return value
		}else{
			return '暂无'
		}

	})
	//开单打印
	//****配送方式 
	Vue.filter('delivery_type',function(value){
		var type = ''
		if(value==0){
			type= '自取'
		}else if(value==1){
			type='速递'
		}else if(value==2){
			type='快递'
		}else if( value == 3){
			type = '店家配送'
		}
		return type;

	})
	Vue.filter('PersonRule',function(value){
		var type='';
		if(value=''){
			type='均分'
		}else{
			type=value
		}
		return type

	})
	//查询界面所以金额过滤
	Vue.filter('all_sum',function(value){
		var sum='';
		if(value=undefined){
			sum=0
		}else{
			sum=value
		}
		return sum
	})
})()
