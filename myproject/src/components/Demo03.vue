<template>
  <div>
    <h1>按钮组件</h1>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary" plain>primary</mt-button>
    <mt-button 
    type="danger"
    size="large" 
    disabled
    >danger</mt-button>
    <h2>带图片的按钮</h2>
    <mt-button type="primary">
      <img src="../assets/didi.jpg" width="20" height="20">
      滴滴按钮
    </mt-button>

    <!-- tabbar -->
    <mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" src="../assets/didi.jpg">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/didi.jpg">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected:1
      }
    }
  }  
</script>
<style lang="">
  
</style>