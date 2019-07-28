<template>
  <div class="container">
    <mt-button @click="handleClick" size="large" type="danger">按钮</mt-button>

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
  .container{
    padding-top:40px;
  }
  .mint-header{
    background-color:darkred;
  }
</style>