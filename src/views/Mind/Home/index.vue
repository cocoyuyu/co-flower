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
    <div class="main">
      <Swiper class="my-swiper" v-if="bannerList.length > 0" :autoplay="3000">
        <SwiperItem v-for="item in bannerList" :key="item.banId">
          <img :src="item.imgUrl" alt="" />
        </SwiperItem>
      </Swiper>
      <!-- Swiper end -->

      <!-- company info start -->
      <div class="conpany-info">
        <div class="conpany-info-item">认证龙头企业</div>
        <div class="conpany-info-item">15年品牌</div>
        <div class="conpany-info-item">3小时送花</div>
        <div class="conpany-info-item">
          最近<a href="/productpj/"><u id="commentCount">361547</u></a
          >条好评
        </div>
      </div>
      <!-- company info end -->

      <!-- nav procate start -->
      <nav class="procate">
        <div
          class="procate-item"
          v-for="item in navProcate"
          :key="item.procateId"
        >
          <router-link to="/home" class="navigation">
            <img :src="item.imgUrl" :alt="item.alt" />
            <p>{{ item.alt }}</p>
          </router-link>
        </div>
      </nav>
      <!-- nav procate start -->

      <!-- festival start -->
      <!-- festival end -->

      <!-- scene 场景 start -->
      <section class="scene">
        <div class="modetitle">一秒选花</div>

        <div class="scene-list">
          <div
            class="scene-item scene-item-radius"
            v-for="item in scene1"
            :key="item.sceneId"
          >
            <router-link to="/" class="navigation">
              <img :src="item.imgUrl" :alt="item.title" />
              <span class="scene-item-use-title">{{ item.title }}</span>
            </router-link>
          </div>
        </div>

        <!-- ----华丽丽的的分割线1------  -->

        <div class="scene-list">
          <div
            class="scene-item scene-item-radius"
            v-for="item in scene2"
            :key="item.scene2"
          >
            <router-link to="/" class="navigation">
              <img :src="item.imgUrl" :alt="item.title" />
              <span class="scene-item-title">{{ item.title }}</span>
            </router-link>
          </div>
        </div>
        <!--mode-2-->
        <!-- ----华丽丽的的分割线2------  -->
        <div class="scene-list">
          <router-link
            to="/"
            class="scene-item scene-item-bg"
            :style="{ 'background-image': 'url(' + item.imgUrl + ')' }"
            v-for="item in scene3"
            :key="item.sceneId"
          >
            <p class="scene-item-name">{{ item.title }}</p>
            <p class="scene-item-desc">{{ item.ft1 }}</p>
            <div class="scene-item-bottom">
              <span class="scene-item-bottom-label">{{ item.ft2 }}</span>
              <span class="scene-item-bottom-text"
                >{{ item.ft3 }}<s>{{ item.ft4 }}</s></span
              >
            </div>
          </router-link>
        </div>
        <!--mode-3-->
        <!-- ----华丽丽的的分割线3------  -->
        <div class="scene-list">
          <div class="scene-item" v-for="item in scene4" :key="item.scene4">
            <router-link to="/" class="navigation">
              <img :src="item.imgUrl" :alt="item.title" />
              <span class="scene-item-pange">{{ item.title }}</span>
            </router-link>
          </div>
        </div>
      </section>
      <!-- scence end -->

      <!-- product start -->
      <section class="product" v-for="item in products" :key="item.proId">
        <h3 class="product-title">{{ item.bigTitle }}</h3>
        <div class="product-list">
          <div class="product-item product-item-horizontal" v-for="item2 in item.productList" :key="item2.ItemCode">
            <a
              href="/product/9010966.html?huaPid=homepage-f101"
              class="navigation"
            >
              <div class="product-item-pic">
                <img
                  :src="item2.imgUrl"
                  :alt="item2.Cpmc"
                />
              </div>
              <div class="product-item-info">
                <p class="product-item-info-name text-overflow">{{item2.Cpmc}}</p>
                <!--Dev:: text-overflow Or text-overflow-line2-->
                <!-- 限时抢购标签 tag-promo，同商品列表页  -->
                <p class="product-item-info-desc text-overflow ">
                  {{item2.Instro}}
                </p>
                <div class="product-item-info-tags">
                  <span class="tag-promo">{{item2.instro3}}</span>
                </div>
                <div class="product-item-info-promo">
                  {{item2.Instro2}}
                </div>
                <div class="product-item-info-bottom">
                  <div class="product-item-info-bottom-left">
                    <p
                      class="product-item-info-prices"
                      data-id="9010966"
                      style="opacity: 1;"
                    >
                      <strong>¥{{item2.Price}}</strong><s>¥{{item2.LinePrice}}</s>
                    </p>
                    <p class="product-item-info-sales">已销售{{item2.Sales}}件</p>
                  </div>
                  <div class="product-item-info-bottom-right" data-id="9010966">
                    <i class="iconfont iconfont-buy"></i>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="product-more">
          <router-link to="/" class="product-more-btn">查看更多</router-link>
        </div>
      </section>
      <!-- product end -->
    </div>
    <!-- nav-footer start -->
    <nav class="tabbar">
      <div class="tabbar-item active">
        <router-link
          to="/mind"
          class="navigation"
          :class="{ active: isActive }"
        >
          <!-- <i class="iconfont icon-iconfontcategory"></i> -->
          <p>首页</p>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/mind/all" class="navigation">
          <!-- <i class="iconfont icon-iconfontcategory"></i> -->
          <p>分类</p>
        </router-link>
      </div>
      <div class="tabbar-item" data="">
        <router-link to="/mind/shopping" class="navigation">
          <!-- <i class="iconfont icon-iconfontcategory" id="cartCount"></i> -->
          <p>购物车</p>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/mind/member" class="navigation">
          <!-- <i class="iconfont icon-iconfontcategory"></i> -->
          <p>我的</p>
        </router-link>
      </div>
    </nav>
    <!-- nav-footer end -->
  </div>
</template>

<script>
// 引入 Swiper 核心与 Swiper样式
import { Swiper, SwiperItem } from '@/components/Swiper'

import { getList } from '@/api/flower'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      bannerList: [],
      navProcate: [],
      scene1: [],
      scene2: [],
      scene3: [],
      scene4: [],
      products: [],
      productList: [],
      isActive: true
    }
  },
  created () {
    getList().then(res => {
      this.bannerList = res.bannerList
      this.navProcate = res.navProcate
      this.scene1 = res.scene1
      this.scene2 = res.scene2
      this.scene3 = res.scene3
      this.scene4 = res.scene4
      this.products = res.products
      console.log(res.products)
    })
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
  }
  .headerbar {
    display: flex;
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
  .my-swiper img {
    width: 100%;
    height: 100%;
  }

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
      .active {
        color: #ff734c;
      }
    }
  }

  .conpany-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    overflow: hidden;
    background: #fff;
    margin-top: 6px;
  }
  .conpany-info > .conpany-info-item {
    width: auto;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 12px;
  }
  .conpany-info > .conpany-info-item > u {
    display: inline-flex;
    max-width: 112px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .conpany-info > .conpany-info-item:before {
    content: "\e666";
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    color: #435448;
    margin-right: 2px;
    vertical-align: bottom;
  }
  .conpany-info > .conpany-info-item + .conpany-info-item {
    margin-left: 12px;
  }
  .procate {
    display: flex;
    background: #fff;
    padding: 12px 0;
  }
  .procate > .procate-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .procate > .procate-item img {
    width: 36px;
  }

  .scene {
    background: #fff;
    padding-bottom: 16px;
    .modetitle {
      font-size: 16px;
      margin: 4px 0 4px 4px;
    }
  }
  .scene > .scene-list {
    display: flex;
    padding: 0 6px;
    font-size: 14px;
  }
  .scene > .scene-list + .scene-list {
    margin-top: 8px;
  }
  .scene-item {
    display: block;
    flex: 1;
    position: relative;
    margin: 0 2px;
    overflow: hidden;
    width: 117px;
    img {
      width: 100%;
    }
  }
  .scene-item.scene-item-radius {
    border-radius: 4px;
  }
  .scene-item.scene-item-bg {
    margin: 0;
    height: 124px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    padding: 10px;
    border: 1px solid #e9ecf0;
  }
  .scene-item.scene-item-bg:nth-child(2n) {
    border-left: 0;
  }
  .scene-item-use-title {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    z-index: 1;
    color: #fff;
    text-align: center;
  }
  .scene-item-title {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    z-index: 1;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .scene-item-desc {
    font-size: 12px;
    color: #71797f;
  }
  .scene-item-pange {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(35, 38, 40, 0.8);
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 4px 0;
  }
  .scene-item-bottom {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 1;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .scene-item-bottom-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 28px;
    background: #ff734c;
    padding: 2px 6px;
    color: #fff;
    margin-right: 22px;
  }
  .scene-item-bottom-text > s {
    color: #b4babf;
  }

  .product {
    margin-top: 8px;
    background: #fff;
    padding-bottom: 20px;
  }
  .product-title {
    font-size: 16px;
    padding: 20px 0;
    text-align: center;
    font-weight: normal;
  }
  .product-list {
    padding: 0 8px 24px;
  }
  .product-list.product-list-vertical {
    padding: 0 4px 24px;
  }
  .product-list:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .product-item > .navigation {
    overflow: hidden;
    box-shadow: 0 4px 14px 0 #e9ecf0;
    border-radius: 4px;
  }
  .product-item-info-name {
    font-weight: 300;
  }
  .product-item-info-desc {
    font-size: 14px;
    font-weight: 300;

    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .product-item-info-tags {
    font-size: 0;
  }
  .product-item-info-tags:empty {
    display: none;
  }
  .product-item-info-tags > span {
    display: inline-flex;
    border-radius: 140px;
    border: 1px solid #ff734c;
    color: #ff734c;
    font-size: 10px;
    padding: 0 4px;
  }
  .product-item-info-tags > span + span {
    margin-left: 8px;
  }
  .product-item-info-bottom {
    display: flex;
    align-items: center;
  }
  .product-item-info-bottom-left {
    flex: 1;
  }
  .product-item-info-bottom-right {
    text-align: right;
  }
  .product-item-info-bottom .icon-cart {
    font-size: 16px;
  }
  .product-item-info-prices > strong {
    font-size: 18px;
    color: #ff734c;
    font-weight: 500;
  }
  .product-item-info-prices > s {
    font-size: 10px;
    color: #71797f;
    margin-left: 6px;
  }
  .product-item-info-sales {
    font-size: 10px;
    color: #71797f;
  }
  .product-item.product-item-horizontal
    + .product-item.product-item-horizontal {
    margin-top: 14px;
  }
  .product-item.product-item-horizontal > .navigation {
    display: flex;
  }
  .product-item.product-item-horizontal .product-item-pic {
    width: 176px;
    min-width: 176px;
    max-width: 176px;
    img {
      width: 100%;
    }
  }
  .product-item.product-item-horizontal .product-item-info {
    flex: 1;
    max-width: 182px;
    padding: 0 20px;
    position: relative;
  }
  .product-item.product-item-horizontal .product-item-info-name {
    padding-top: 18px;
  }
  .product-item.product-item-horizontal .product-item-info-tags {
    margin-top: 6px;
  }
  .product-item.product-item-horizontal .product-item-info-promo {
    margin-top: 12px;
    padding: 10px 0;
    border-top: 2px solid #e9ecf0;
    border-bottom: 2px solid #e9ecf0;
    font-size: 12px;
    font-weight: 500;
  }
  .product-item.product-item-horizontal .product-item-info-bottom {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 6px;
    z-index: 1;
  }
  .product-item.product-item-vertical {
    float: left;
    width: 50%;
    padding: 0 4px;
    margin-bottom: 8px;
  }
  .product-item.product-item-vertical .product-item-pic {
    max-height: 190px;
    overflow: hidden;
  }
  .product-item.product-item-vertical .product-item-info {
    padding: 8px 8px 16px;
    height: 108px;
    overflow: hidden;
    position: relative;
  }
  .product-item.product-item-vertical .product-item-info-tags {
    margin-bottom: 8px;
  }
  .product-item.product-item-vertical .product-item-info-bottom {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 16px;
    z-index: 1;
  }
  .product-more-btn {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    border: 1px solid #232628;
    width: 94px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 2px;
  }
  .product-item-info-name {
    font-size: 14px;
  }
}
</style>
