<template>
	<div class="productComment">
		<x-header>{{headerTitle}}</x-header>
		<scroller lock-x height="-40">
      <div class="">
        <div class="contentBox pro-com-content">
					<ul>
						<li class="pro-com-top">
							<span>项目名称</span>
							<span>这是项目名称这是项目名称这是项目名这是项目名称这是项目名称这是项这是</span>
						</li>
						<li class="pro-com-icon">
							<span>满意</span>
							<span>一般</span>
							<span>吐槽</span>
						</li>
						<li class="pro-com-inp">
							<textarea maxlength="140" rows="7" placeholder="亲,来说几句吧" @click="handleCommentText"></textarea>
							<span>{{pro_len}}/140</span>
						</li>
					</ul>
				</div>
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
		
		<div class="pro-com-btn" @click="handleComment">提交</div>
	</div>
</template>

<script>
	import { XHeader, Scroller} from 'vux'
	export default {
		components: {
  	  XHeader, 
  	  Scroller
  	},
	  data () {
	    return {
	      headerTitle:'',
	      pro_comments: '',
	      pro_len: 0,
	    }
	  },
	  methods:{
	  	handleCommentText(e){
	  		var _this = this
	  		e.target.oninput = function(){
	  			_this.pro_comments = this.value
	  			_this.pro_len = this.value.length
	  			_this.pro_comments = _this.pro_comments
	  		}
	  	},
	  	//提交评价
    	handleComment(){
    		this.load_show('正在提交',function(){
    	  	console.log(this)
    	  	this.load_hide(500,function(){
    	  		this.toast('提交评价');
    	  	}.bind(this))
    	  	
    	  }.bind(this))
    	  
    	},
	  },
	  created(){
	  	var routers = this.$router.history
    	this.headerTitle = routers.current.meta.title
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .productComment{
    background-color: #fff;
  }
	.pro-com-content ul{
		width: 94%;
		padding: 1rem 0;
    margin: 0 auto;
    color: #9a9a9a;
	}
	.pro-com-top span{
		display: inline-block;
	}
	.pro-com-top span:nth-child(1){
		width: 20%;
		vertical-align: top;
		font-weight: 400;
    color: #656565;
	}
	.pro-com-top span:nth-child(2){
		width: 78%;
    text-align: right;
	}
	.pro-com-content ul li:nth-child(2){
		margin-top: 1rem;
    padding: 1rem;
    border-top: 1px solid #e8e8e8;
		text-align: center;
	}
	.pro-com-content ul li:nth-child(2) span{
		display: inline-block;
		line-height: 10rem;
		width: 4rem;
		height: 4rem;
		background-color: #ccc;
    border-radius: 50%;
	}
	.pro-com-content ul li:nth-child(2) span:nth-child(2){
		margin:0 2rem;
	}
	.pro-com-inp{
		width: 94%;
		margin:0 auto;
		border:1px solid #ccc;
		border-radius: 10px;
		overflow: hidden;
	}
	.pro-com-inp textarea{
		width: 96%;
    margin: 0.4rem 0 0 0.4rem;
    resize: none;
    border: 0;
    outline: none;
    text-indent: 1rem;
    font-size: 1.4rem;
    color: #404040;
	}
	.pro-com-inp span{
		display: block;
		text-align: right;
		margin-right: 1rem;
	}
	.pro-com-btn{
		position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 2.4rem;
    text-align: center;
    background-color:#88b1f3;
    color:#fff;
	}
</style>
