<template>
  <div class="hello">
    <button @click="go">跳转</button>
    <router-link to="/demo02">列表</router-link>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <h2>Ecosystem</h2>
    <p>
      <span class="iconfont">&#xeb9a;</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    go(){
      this.$router.push('/demo01');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
