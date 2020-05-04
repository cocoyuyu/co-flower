<template>
  <div class="page-member">
    <h1>个人中心页面</h1>
    <router-link to="/loginr" class="sbtn">点击跳到登录注册页面</router-link>
    <br>
    <button  @click="handleClick">写入localstorage</button>
    <!-- Tabbar-footer start -->
    <TabbarFooter></TabbarFooter>
    <!-- Tabbar-footer end -->
    <router-view/>
  </div>
</template>

<script>
import TabbarFooter from '@/components/TabbarFooter'
export default {
  name: 'Member',
  data () {
    return {
    }
  },
  components: {
    TabbarFooter
  },
  methods: {
    handleClick () {
      window.localStorage.setItem('key', '123')
    }
  }
}
</script>
<style lang="scss" scoped>
.sbtn {
  color: skyblue
}
</style>
