<template>
  <div class="MyComments">
    <!-- 导航 -->
    <x-header :left-options="{backText: '',showBack: true}">
      <span class="p-b-title-title">{{headerTitle}}</span>
    </x-header>
    <scroller lock-x height="-44" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="scroller-box Scroller">
        
        <!-- <load-more tip="loading"></load-more> -->
      </div>
    </scroller>
  </div>
</template>

<script>
import { XHeader, Scroller } from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      headerTitle:''
    }
  },
  methods:{

  },
  created(){
    let routers = this.$router.history
    this.headerTitle = routers.current.meta.title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MyCommentsContent{
    color: #6b6b6b;
  }
  
</style>
<style>
  
</style>
