<template>
  <div class="page-home">
    <!--HeaderBar start-->
    <HeaderBar></HeaderBar>
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
      <CompanyInfo></CompanyInfo>
      <!-- company info end -->

      <!-- nav procate start -->
      <nav class="procate">
        <NavProcate
          v-for="item in navProcate"
          :key="item.procateId"
          :info="item"
        ></NavProcate>
      </nav>
      <!-- nav procate start -->

      <!-- festival start -->
      <!-- festival end -->

      <!-- scene 场景 start -->
      <section class="scene">
        <div class="modetitle">一秒选花</div>

        <div class="scene-list">
          <scene1 v-for="item in scene1" :key="item.sceneId" :info="item"></scene1>
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
      <Product v-for="item in products" :key="item.proId" :info="item"></Product>
      <!-- product end -->
    </div>
    <!-- Tabbar-footer start -->
    <TabbarFooter></TabbarFooter>
    <!-- Tabbar-footer end -->
  </div>
</template>

<script>
import HeaderBar from './Components/HeaderBar'
import CompanyInfo from './Components/CompanyInfo'
import NavProcate from './Components/NavProcate'
import Scene1 from './Components/Scene1'
import Product from '@/components/Product'
import TabbarFooter from '@/components/TabbarFooter'

// 引入 Swiper 核心与 Swiper样式
import { Swiper, SwiperItem } from '@/components/Swiper'
// 引入接口方法
import { getList } from '@/api/flower'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Swiper,
    CompanyInfo,
    SwiperItem,
    NavProcate,
    Scene1,
    Product,
    TabbarFooter
  },
  data () {
    return {
      bannerList: [],
      navProcate: [],
      scene1: [],
      scene2: [],
      scene3: [],
      scene4: [],
      products: []
      // isActive: true
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
      // console.log(res.products)
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
  .my-swiper img {
    width: 100%;
    height: 100%;
  }

  .procate {
    display: flex;
    background: #fff;
    padding: 12px 0;
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
}
</style>
