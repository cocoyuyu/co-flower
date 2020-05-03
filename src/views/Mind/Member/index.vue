<template>
  <div class="page-member">
    <h1>个人中心页面</h1>
    <router-link to="/loginr" class="sbtn">点击跳到登录注册页面</router-link>
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
  }
}
</script>
<style lang="scss" scoped>
.sbtn {
  color: skyblue
}
</style>
