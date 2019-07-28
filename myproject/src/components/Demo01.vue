<template>
  <div>
    <h1 id="s">{{msg}}</h1>
    <button @click="handleClick">按钮</button>
    <div>{{num}}</div>
  </div>
</template>
<script>
  export default {
    data:function(){
      return {
        msg:'hello world',
        num:1
      }
    },
    methods:{
      handleClick(){
        this.num++;
      }
    },
    //初始化，只是初始化了事件和生命周期函数
    //数据还没有初始化
    beforeCreate() {
      console.log(this.msg);
    },
    created() {
      console.log(this.msg); 
    },
    //还没有挂载，是在内存中，不能使用该dom
    beforeMount() {
      console.log( document.getElementById('s') );
    },
    //挂载到Vue中
    mounted() {
      console.log( document.getElementById('s') );
    },
    beforeUpdate() {
      console.log('准备更新');
    },
    updated() {
      console.log('更新完成');
    }
  }
</script>
<style lang="" scoped>
  h1{
    color:red;
  }
</style>