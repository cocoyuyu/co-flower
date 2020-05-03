<template>
  <div class="page-member">
    <h1>个人中心页面</h1>
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
