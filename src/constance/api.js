/**
*
* customer-count api
* 上线时接口调用
*
*/

export default {
/**
* login
*/
send_code:'/client/user/sendCode',//激活账号-发送验证码
next_active:'/client/user/nextStep',//激活账号-下一步
next_psw:'client/user/activation',//激活账号
re_psw:'/client/user/retrieve',//找回密码
headIcon:'client/user/headIcon',//登录验证
login:'/client/user/login',//登录


/**
 * order
 */
company_list: '/client/billNews/companyList', //门店列表/client/billNews/order
company_order: '/client/billNews/order', //门店列表client/billNews/orderDetail
company_credit: 'client/billNews/orderCredit', //门店列表client/billNews/orderDetail
details_order: 'client/billNews/orderDetail', //门店列表
confirm_sign: 'client/billNews/confirmSign', //确认签名
get_sign: '/client/UserSign/getSign', //门店列表



















}