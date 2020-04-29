<template>
  <div class="page-home">
    <!--HeaderBar start-->
    <header class="headerbar">
      <div class="headerbar-left">
        <a href="/all.html">
          <i class="iconfont icon-iconfontcategory"></i>
        </a>
      </div>
      <div class="headerbar-logo">
        <img
          src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
        />
      </div>
      <div class="headerbar-right" id="onlineChat">
        <div class="headerbar-right-kf active">
          <p class="iconfont icon-contact"></p>
        </div>
      </div>
    </header>
    <!--HeaderBar end-->

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .headerbar {
    display: flex;
    // height: 3.42857143rem;
    height: 48px;
    align-items: center;
    justify-content: center;
    background: #435448;
    overflow: hidden;
    color: #fff;
  }
  .headerbar .iconfont {
    color: #fff;
    font-size: 24px;
  }
  .headerbar > .headerbar-logo {
    flex: 1;
    text-align: center;
  }
  .headerbar > .headerbar-logo > img {
    width: 150px;
  }
  .headerbar > .headerbar-left,
  .headerbar > .headerbar-right {
    width: 48px;
    height: 48px;
    line-height: 48px;
    box-sizing: content-box;
  }
  .headerbar-left {
    padding-left: 14px;
  }
  .headerbar-right {
    padding-right: 14px;
    text-align: right;
  }
  .headerbar-right-login,
  .headerbar-right-user {
    display: none;
  }
  .headerbar-right-login a,
  .headerbar-right-user a {
    height: 48px;
  }
  .headerbar-right-login.active,
  .headerbar-right-user.active {
    display: block;
  }
}
</style>
