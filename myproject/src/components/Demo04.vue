<template>
  <div class="container">
    <mt-header fixed title="学子商城">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回
        </mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-field label="用户名"placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected:1,
        username:'tom'
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