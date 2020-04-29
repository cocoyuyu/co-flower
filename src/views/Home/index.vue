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

    <!-- Swiper start -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- Swiper end -->

    <router-view />
  </div>
</template>

<script>
// 引入 Swiper 核心与 Swiper样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Home',
  mounted () {
    /* eslint-disable */
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    /* eslint-enable */
  }
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

  .swiper-container {
    width: 100%;
    height: 180px;
    background: pink;
  }
}
</style>

<style lang="scss">
.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background: #fff;
  opacity: initial;
  border-radius: 28px;
}
.swiper-pagination-bullet-active {
  background: #ff734c;
  width: 32px;
}
</style>
