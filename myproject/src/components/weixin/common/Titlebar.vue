<template>
  <div class="header">
    <span>{{leftTitle}}</span>
    <div class="right-head">
      <div class="searchDiv" @click="search">
        <img :src="rightFirstImg" alt="">
      </div>
      <div class="searchDiv" @click="add" style="margin-left:25px;">
        <img :src="rightSecondImg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    props:{
      leftTitle:{default:''},
      rightFirstImg:{default:''},
      rightSecondImg:{default:''},
      add:{type:Function},
      search:{type:Function}
    }
  }
</script>
<style scoped>
.header{
  box-sizing: border-box;
  width:100%;
  height: 47px;
  background: #3e3a39;
  color:#fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:7px;
  padding-right:7px;
}
.right-head{
  display: flex;
}
.searchDiv{
  display: flex;
  align-items: center;
}
.searchDiv>img{
  width: 25px;
}
</style>
