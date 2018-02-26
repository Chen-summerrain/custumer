/**
 * routers
 */
/**
*  首页及登录页
*/ 
import Home from '../components/Home'
import Login from '../components/Login'
/**
*  登录页激活及密码
*/ 
import ActiveAcount from '../components/Login/ActiveAcount'
import SetPassword from '../components/Login/SetPassword'
/**
*  首页-消息页
*  消息详情
*  订单详情
*/
import News from '../components/News/News'
import NewsDetails from '../components/News/NewsDetails'
import ProductDetails from '../components/News/ProductDetails'
import ProductComment from '../components/News/ProductComment'
import ContactPerson from '../components/News/ContactPerson'
/**
*  电话簿
*  添加联系人
*  编辑联系人
*/
import PhoneBookHome from '../components/Admin/Phone/PhoneBookHome'
import PhoneBookAdd from '../components/Admin/Phone/PhoneBookAdd'
import PhoneBookEditor from '../components/Admin/Phone/PhoneBookEditor'
/**
*  我的
*  设置
*  取寄件
*  订单详情
*  电子签名
*/
import Admin from '../components/Admin/Admin'
import UploadImg from '../components/Admin/uploadImg'
import SetHome from '../components/Admin/Set/SetHome'
import ManageExpress from '../components/Admin/Set/ExpressAddress/ManageExpress'
import AdminName from '../components/Admin/Set/SetAdminName/SetAdminName'
import ExpressEditor from '../components/Admin/Set/ExpressAddress/ExpressEditor'
import AcountSetHome from '../components/Admin/Set/AcountSet/AcountSetHome'
import MyComments from '../components/Admin/MyComment/MyComments'
import MyOrder from '../components/Admin/MyOrder/MyOrder'
import MyOrderDetails from '../components/Admin/MyOrder/MyOrderDetails'
import MyExpress from '../components/Admin/MyExpress/MyExpress'
import MySignAdd from '../components/Admin/Sign/addSign'
/**
*  下单
*  商品列表
*  商品详情
*/
import OrderHome from '../components/Order/OrderHome'
import OrderList from '../components/Order/OrderList'
import GoodsDetails from '../components/Order/GoodsDetails'
/**
*  购物车
*  结算
*  成功返回
*/
import ShoppingCar from '@/components/ShopCar/ShoppingCar'
import ShoppingOrder from '@/components/ShopCar/ShoppingOrder'
import ShoppingSuccess from '@/components/ShopCar/ShoppingSuccess'

const  routers = [	
	{ path: '/', redirect: '/Login'},
	{path: '/Login',component: Login,name: 'Login'},
	{
		path: '/Home',
		component: Home,
		name: 'home',
		children:[
			{path:'/News',name:'news',component:News,meta:{require: true,title:'消息'}},
			{path:'/Admin',name:'admin',component:Admin,meta:{require: true,title:'我的'}},
			{path:'/OrderHome',name:'orderHome',component:OrderHome,meta:{require: true,title:'订单页面'}},
			{path:'/ShoppingCar',name:'shoppingCar',component:ShoppingCar,meta:{require: true,title:'购物车'}},
		]
	},
	{path:'/Login/activeacount',name:'ActiveAcount',component:ActiveAcount,meta:{require: true,title:'激活账号'}},
	{path:'/Login/SetPassword',name:'SetPassword',component:SetPassword,meta:{require: true,title:'忘记密码'}},
	//news
	{path:'/NewsDetails',name:'NewsDetails',component:NewsDetails,meta:{require: true,title:'订单消息详情'}},
	{path:'/ProductDetails',name:'ProductDetails',component:ProductDetails,meta:{require: true,title:'项目详情'}},
	{path:'/ProductComment',name:'ProductComment',component:ProductComment,meta:{require: true,title:'项目评价'}},
	//Admin-set  UploadImg
	{path:'/Admin/SetHome',name:'SetHome',component:SetHome,meta:{require: true,title:'设置'}},
	// {path:'/Admin/UploadImg',name:'UploadImg',component:UploadImg,meta:{require: true,title:'图像设置'}},
	{path:'/Admin/SetHome/AdminName',name:'AdminName',component:AdminName,meta:{require: true,title:'设置昵称'}},
	{path:'/Admin/ManageExpress',name:'ManageExpress',component:ManageExpress,meta:{require: true,title:'地址管理'}},
	{path:'/Admin/ExpressEditor',name:'ExpressEditor',component:ExpressEditor,meta:{require: true,title:'地址编辑'}},
	{path:'/Admin/AcountSetHome',name:'AcountSetHome',component:AcountSetHome,meta:{require: true,title:'账户安全'}},
	//Admin-sign AddSign MySignAdd
	{path:'/Admin/MySignAdd',name:'MySignAdd',component:MySignAdd,meta:{require: true,title:'添加签名照'}},
	//Admin-MyComment
	{path:'/Admin/MyComments',name:'MyComments',component:MyComments,meta:{require: true,title:'我的评价'}},
	//Admin-MyOrder
	{path:'/Admin/MyOrder',name:'MyOrder',component:MyOrder,meta:{require: true,title:'我的订单'}},
	{path:'/Admin/MyOrderDetails',name:'MyOrderDetails',component:MyOrderDetails,meta:{require: true,title:'订单详情'}},
	//Admin-MyExpress
	{path:'/Admin/MyExpress',name:'MyExpress',component:MyExpress,meta:{require: true,title:'订单寄件'}},
	//Admin-phone
	{path:'/Admin/PhoneBookHome',name:'PhoneBookHome',component:PhoneBookHome,meta:{require: true,title:'通讯录'}},
	{path:'/Admin/PhoneBookHome/PhoneBookAdd',name:'PhoneBookAdd',component:PhoneBookAdd,meta:{require: true,title:'添加联系人'}},
	{path:'/Admin/PhoneBookHome/PhoneBookEditor',name:'PhoneBookEditor',component:PhoneBookEditor,meta:{require: true,title:'联系人详情'}},
	{path:'/ContactPerson',name:'ContactPerson',component:ContactPerson,meta:{require: true,title:'联系人'}},
	//Order-OrderList
	{path:'/Admin/OrderList',name:'OrderList',component:OrderList,meta:{require: true,title:'商品列表'}},
	{path:'/Admin/GoodsDetails',name:'GoodsDetails',component:GoodsDetails,meta:{require: true,title:'商品详情'}},
	//Order-OrderList
	{path:'/ShopCar/ShoppingOrder',name:'ShoppingOrder',component:ShoppingOrder,meta:{require: true,title:'确认下单'}},
	{path:'/ShopCar/ShoppingSuccess',name:'ShoppingSuccess',component:ShoppingSuccess,meta:{require: true,title:'下单成功'}},
]
export default  routers