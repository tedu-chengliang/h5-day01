<template>
  <div>
    <titlebar
      leftTitle="微信(11)"
      :rightFirstImg="require('../../assets/ic_search.png')"
      :rightSecondImg="require('../../assets/ic_add.png')"
      :add="myadd"
      :search="mysearch"
    ></titlebar>
    <messagelist></messagelist>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../../assets/ic_weixin_selected.png">
        微信
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../assets/ic_me_selected.png">
        通讯录
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../../assets/ic_find_selected.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../../assets/ic_me_selected.png">
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Titlebar from './common/Titlebar'
import MessageList from './common/MessageList'
export default {
  data(){
    return {
      selected:'tab1'
    }
  },
  components:{
    'titlebar':Titlebar,
    'messagelist':MessageList
  },
  methods:{
    myadd(){
      console.log('添加好友')
    },
    mysearch(){
      console.log('点击搜索')
    }
  }
}
</script>
<style scoped>

</style>
