<template>
  <div>
    <h1>elementUI使用</h1>
    <!-- 轮播图部分 -->
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
    <!-- 按钮部分 -->
    <div>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
.el-button--primary{
  color:red;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
