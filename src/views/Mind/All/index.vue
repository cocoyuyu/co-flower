<template>
  <div class="page-all">
    <!--SearchHeaderBar start-->
    <header class="headerbar">
      <div class="headerbar-content">
        <div class="headerbar-content-left">
          <i class="iconfont icon-Smile"></i>
        </div>
        <div class="headerbar-content-center">
          <router-link to="/all">搜索鲜花、蛋糕、礼品</router-link>
        </div>
      </div>
    </header>
    <!--SearchHeaderBar end-->

    <section class="catebox">
      <!--CategoryBox LeftMenu-->

      <!-- 左侧栏-父子通信，监听子组件的自定义事件 -->
      <!-- 左侧栏-子父通信，根据左侧数据变化右侧跟着变化 -->
      <HeaderType :types="types"></HeaderType>
      <!--CategoryBox RightDetails-->

      <section class="catebox-details" v-gotop>
        <article id="hot" name="hot" class="catebox-details-mode active" v-for="item in rightList" :key="item.ranktype">
          <header class="catebox-details-banner">
            <router-link to="/all" class="navigation" href="https://m.hua.com/theme/mothersday/">
              <img
                :src="item.banUrl"
                alt=""
              />
            </router-link>
          </header>
          <div class="catebox-details-body">
            <nav class="catebox-details-list ">
              <div class="catebox-details-item" v-for="item2 in item.productList" :key="item2.ItemCode">
                <router-link to="/all" class="navigation">
                  <img
                    class="catebox-details-item-pic"
                    :src="item2.imgUrl"
                    :alt="item2.Cpmc"
                  />
                  <p class="catebox-details-item-desc">{{item2.Cpmc}}</p>
                </router-link>
              </div>
            </nav>
          </div>
        </article>
      </section>
    </section>
    <!-- Tabbar-footer start -->
    <TabbarFooter></TabbarFooter>
    <!-- Tabbar-footer end -->
  </div>
</template>

<script>
import TabbarFooter from '@/components/TabbarFooter'
import HeaderType from '@/components/HeaderType'

// 引入接口方法
import { getClassify } from '@/api/flower'

export default {
  name: 'All',
  data () {
    return {
      types: [
        { id: '1', description: '热门推荐', ranktype: 6 },
        { id: '2', description: '鲜花', ranktype: 1 },
        { id: '3', description: '永生花', ranktype: 4 },
        { id: '4', description: '蛋糕', ranktype: 2 },
        { id: '5', description: '特色礼品', ranktype: 5 },
        { id: '6', description: '礼篮', ranktype: 3 },
        { id: '7', description: '绿植花卉', ranktype: 7 }
      ],
      rightList: []
    }
  },
  components: {
    HeaderType,
    TabbarFooter
  },
  methods: {
    // 根据 ranktype 发请求找数据
    getClassify (ranktype) {
      getClassify(ranktype).then(res => {
        this.rightList = res.rightList
      })
    },
    // 切换分类类型时触发
    onTypeChange (payload) {
      console.log(payload)
      // 取出 payload 中的type 中的 ranktype
      const ranktype = payload.type.ranktype
      // 重新发送 B 接口请求并携带参数
      this.getClassify(ranktype)
    }
  },
  created () {
    this.getClassify(this.types[0].ranktype)
  }
}
</script>

<style lang="scss" scoped>
.page-all {
  display: flex;
  .headerbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 9;
    height: 46px;
    box-sizing: content-box;
    background: #fff;
    overflow: hidden;
    border-bottom: 2px solid #f1f3f6;
  }
  .headerbar-content {
    display: flex;
    height: 36px;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 4px 16px;
    padding-left: 6px;
    background-color: #f3f5f7;
    border-radius: 15px;
  }
  .headerbar-content-left,
  .headerbar-content-right {
    width: 30px;
    height: 30px;
    line-height: 26px;
    text-align: center;
  }
  .headerbar-content-left .iconfont,
  .headerbar-content-right .iconfont {
    font-size: 14px;
    color: #b0b3b6;
  }
  .headerbar-content-center {
    flex: 1;
    height: 30px;
    line-height: 30px;
    padding-right: 12px;
    color: #71797f;
    font-size: 14px;
  }
  .headerbar-content-center a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .catebox {
    flex: 1;
    position: relative;
    width: 100%;
    height: calc(100vh - 42px);
    padding-top: 38px;
    .navigation {
      img {
        margin-left: 14px;
      }
    }
  }

  .catebox-details {
    position: absolute;
    top: 38px;
    left: 21.06666667%;
    width: 78.93333333%;
    bottom: 0;
    z-index: 2;
    transform: translate3d(0, 0, 0);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .catebox-details-mode {
    display: none;
    padding: 10px 10px 38px;
  }
  .catebox-details-mode.active {
    display: block;
  }
  .catebox-details-banner {
    height: 98px;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      width: 100%;
      margin-top: 8px;
    }
  }
  .catebox-details-banner > .navigation {
    position: relative;
    display: block;
    height: 84px;
  }
  .catebox-details-banner-price {
    position: absolute;
    top: 45.92%;
    left: 4.04%;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
  }
  .catebox-details-banner-price p {
    display: inline-block;
    margin-left: 3px;
    font-weight: normal;
    text-decoration: line-through;
    font-size: 10px;
    line-height: 18px;
  }
  .catebox-details-body {
    padding: 6px 4px;
    border-radius: 2px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 6px 0px #e9ecf0;
  }
  .catebox-details-title {
    display: flex;
    margin-bottom: 10px;
    padding: 0 10px;
  }
  .catebox-details-title-left,
  .catebox-details-title-right {
    flex: 1;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .catebox-details-title-left {
    font-weight: normal;
  }
  .catebox-details-title-right {
    text-align: right;
    color: #71797f;
  }
  .catebox-details-title-right > .navigation {
    display: inline-block;
    padding: 0 4px;
    height: 30px;
    font-size: 10px;
  }
  .catebox-details-title-right > .navigation .iconfont {
    font-size: inherit;
  }
  .catebox-details-list:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .catebox-details-list-square {
    padding: 0 2px;
  }
  .catebox-details-list-square .catebox-details-row {
    font-size: 0;
    border-bottom: 1px solid #f7f9fa;
  }
  .catebox-details-list-square
    .catebox-details-row:first-child
    .catebox-details-item {
    height: 40px;
    padding-top: 0;
  }
  .catebox-details-list-square .catebox-details-row:last-child {
    border-bottom: none;
  }
  .catebox-details-list-square
    .catebox-details-row:last-child
    .catebox-details-item {
    height: 40px;
    padding-bottom: 0;
  }
  .catebox-details-list-square .catebox-details-item {
    box-sizing: border-box;
    float: none;
    display: inline-block;
    height: 48px;
    border-right: 1px solid #f7f9fa;
    text-align: center;
    vertical-align: top;
  }
  .catebox-details-list-square .catebox-details-item:last-child {
    border-right: none;
  }
  .catebox-details-list-square .catebox-details-item .navigation img {
    width: 62px;
    height: 34px;
    border-radius: 0;
  }
  .catebox-details-list-text .catebox-details-item {
    margin: 0 0 10px;
    padding: 0;
  }
  .catebox-details-list-text .catebox-details-item .navigation {
    width: 62px;
    height: 30px;
    margin: 0 auto;
    border-radius: 2px;
    background: #f7f9fa;
  }
  .catebox-details-list-text .catebox-details-item .catebox-details-item-desc {
    margin: 0;
    font-size: 10px;
    color: #232628;
    line-height: 30px;
  }
  .catebox-details-item {
    float: left;
    width: 33.33333333%;
    padding: 6px 0;
  }
  .catebox-details-item > .navigation {
    text-align: center;
  }
  .catebox-details-item > .navigation > img {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    overflow: hidden;
  }
  .catebox-details-item > .navigation > p {
    font-size: 12px;
    font-weight: 300;
    line-height: 1.33333333;
    max-width: 78px;
    margin: 6px auto 0;
    color: #232323;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .catebox-details-item > .navigation > p:empty {
    display: none;
  }
}
</style>
