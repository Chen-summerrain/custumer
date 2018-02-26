<template>
  <div id="app">
  	<!-- <component :is="curV"></component> -->
  	<transition :name="transitionName">
  		<keep-alive>
		  	<router-view class="child-view"></router-view>
		  </keep-alive>
		</transition>
	
  </div>
</template>

<script>
export default {
	data(){
		return {
			transitionName: 'slide-left'
		}
	},
	methods:{
		
	},
	watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'  
    }
  },
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/close.less';

	*{
		margin:0;
		padding:0;
	}
	html,body{
		width:100%;
		height:100%;
		font-size: 16px;
	}
	body {
  	background-color: #f3f0f0;
	}
	#app{
		width:100%;
		height:100%;
	}
	ul li{
		list-style: none;
	}
	textarea::-webkit-input-placeholder,input::-webkit-input-placeholder { /* WebKit browsers */  
	  color: #ddd;
	  font-size: 0.9rem; 
	}  
	textarea:-moz-placeholder,input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
	  color: #ddd;
	  font-size: 0.9rem;  
	}  
	textarea::-moz-placeholder,input::-moz-placeholder { /* Mozilla Firefox 19+ */  
	  color: #ddd;
	  font-size: 0.9rem;  
	}  
	textarea:-ms-input-placeholder,input:-ms-input-placeholder { /* Internet Explorer 10+ */  
	  color: #ddd;
	  font-size: 0.9rem;   
	}
	input{
		color:#ccc;
	}
	i{
		font-style: normal;
		font-size: 0.8rem;
    color:#6f6e6e;
	}    
</style>
<style>
	.child-view {  
	  position: absolute;  
	  left: 0;  
	  top: 0;  
	  width: 100%;  
	  height: 100%;  
	  transition: all .5s cubic-bezier(.55,0,.1,1);  
	}  
	/*.slide-left-enter, .slide-right-leave-active {  
	  opacity: 0;  
	  -webkit-transform: translate(300px, 0);  
	  transform: translate(300px, 0);  
	}  
	.slide-left-leave-active, .slide-right-enter {  
	  opacity: 0;  
	  -webkit-transform: translate(-300px, 0);  
	  transform: translate(-300px, 0);  
	} */

	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
	  will-change: transform;
	  transition: all 500ms;
	  height: 100%;
	  /*top: 46px;*/
	  position: absolute;
	  backface-visibility: hidden;
	  perspective: 1000;
	}
	.slide-left-enter {
	  opacity: 0;
	  /*transform: translate3d(-100%, 0, 0);*/
	}
	.slide-left-leave-active {
	  opacity: 0;
	  /*transform: translate3d(100%, 0, 0);*/
	}
	.slide-right-enter {
	  opacity: 0;
	  /*transform: translate3d(100%, 0, 0);*/
	}
	.slide-right-leave-active {
	  opacity: 0;
	  /*transform: translate3d(-100%, 0, 0);*/
	} 
</style>

