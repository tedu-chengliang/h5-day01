<template>
  <div class="container">
    <mt-swipe 
      :auto="0"
      :show-indicators="false"
      :speed="100"
    >
      <mt-swipe-item>
        <img src="../assets/1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/3.jpg">
      </mt-swipe-item>
    </mt-swipe>

  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        selected:1,
        username:'tom'
      }
    },
    methods: {
      handleClick() {
        // Toast({
        //   message: '登录成功',
        //   position: 'top',
        //   duration: 5000,
        //   iconClass: 'icon icon-success'
        // });
        Toast({
          message: '操作成功',
          iconClass: 'icon icon-success'
        });
      }
    }
  }  
</script>
<style lang="">
  .mint-swipe{
    height:100px;
  }
  .mint-swipe-item>img{
    width:100%;
  }
</style>