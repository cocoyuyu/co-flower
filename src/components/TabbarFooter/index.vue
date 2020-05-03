<template>
  <nav class="tabbar">
    <div class="tabbar-item">
      <router-link
        to="/home"
        class="navigation"
      >
        <!-- <i class="iconfont icon-iconfontcategory"></i> -->
        <p>首页</p>
      </router-link>
    </div>
    <div class="tabbar-item">
      <router-link
        to="/all"
        class="navigation"
      >
        <!-- <i class="iconfont icon-iconfontcategory"></i> -->
        <p>分类</p>
      </router-link>
    </div>
    <div class="tabbar-item" data="">
      <router-link
        to="/shopping"
        class="navigation"
      >
        <!-- <i class="iconfont icon-iconfontcategory" id="cartCount"></i> -->
        <p>购物车</p>
      </router-link>
    </div>
    <div class="tabbar-item">
      <router-link
        to="/member"
        class="navigation"
      >
        <!-- <i class="iconfont icon-iconfontcategory"></i> -->
        <p>我的</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TabbarFooter',
  data () {
    return {
      curPage: 'mind'
    }
  },
  props: {}
}
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  z-index: 9999;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #f7f9fa;
  .tabbar-item {
    height: 48px;
    line-height: 48px;
    flex: 1;
    text-align: center;
    .navigation {
      display: block;
    }
    .iconfont {
      font-size: 24px;
      margin-top: 10px;
      position: relative;
    }
    p {
      font-size: 12px;
      border: 0;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .router-link-exact-active {
      color: #ff734c;
    }
  }
}
</style>
<style lang="scss"></style>
