<template>
  <div>
    <h2>Vue中axios使用</h2>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        list:[]
      }
    },
    //在生命周期函数中获取数据
    created() {
      //发送请求
      this.$http.get('/list').then( (result)=>{
        console.log(result.data);
        var data=result.data;
        this.list=data.list;
      } );
    }
  }
</script>
<style lang="">
  
</style>