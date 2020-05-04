<template>
  <div class="page-shopping">
    <section class="main">
      <div class="login">
        <span class="login-tips">登录后将同步您的购物车商品</span>
        <router-link
          class="login-btn"
          to="/loginr"
          >登录</router-link
        >
      </div>
      <div class="emptycart">
        <img
          class="img"
          style="margin-left:-12px"
          src="https://img02.hua.com/m/Shopping/m_shopping_empty_cart.png?v2"
          alt=""
        />
        <p class="text">购物车内暂时没有商品</p>
        <a class="home" href="/">去逛逛</a>
      </div>
      <div class="guess">
        <div class="guess-title">猜你喜欢</div>
        <div class="guess-list">
          <div class="guess-item">
            <router-link to="/shopping">
              <div class="guess-item-img">
                <img
                  src="//img01.hua.com/uploadpic/newpic/9010966.jpg"
                  alt=""
                />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">一往情深</span>·<span
                    class="guess-item-desc"
                    >精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</span
                  >
                </div>
                <div class="guess-item-price">¥249</div>
              </div>
            </router-link>
          </div>
          <div class="guess-item">
            <a href="/product/9010011.html">
              <div class="guess-item-img">
                <img
                  src="//img01.hua.com/uploadpic/newpic/9010011.jpg"
                  alt=""
                />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <span class="guess-item-name">一心一意</span>·<span
                    class="guess-item-desc"
                    >玫瑰11枝，粉色勿忘我0.3扎</span
                  >
                </div>
                <div class="guess-item-price">¥139</div>
              </div>
            </a>
          </div>
        </div>
        <div class="guess-bottom">
          <span>已经到底喽…</span>
        </div>
      </div>
    </section>
    <!-- Tabbar-footer start -->
    <TabbarFooter></TabbarFooter>
    <!-- Tabbar-footer end -->
  </div>
</template>

<script>
import TabbarFooter from '@/components/TabbarFooter'

export default {
  name: 'Shopping',
  data () {
    return {}
  },
  components: {
    TabbarFooter
  }
}
</script>

<style lang="scss" scoped>
section.main .login {
  height: 40px;
  line-height: 36px;
  text-align: center;
  background: #fff0ec;
  border:1px solid rgba(255, 115, 76, 0.2);
}
section.main .login-tips {
  font-size: 14px;
}
section.main .login-btn {
  display: inline-block;
  margin-left: 13px;
  width: 52px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 22px;
  border:1px solid #ff734c;
  color: #FF734C;
  font-size: 10px;
}
section.main .emptycart {
  background-color: #fff;
  padding: 34px 0 42px;
  text-align: center;
}
section.main .emptycart img.img {
  width: 102px;
}
section.main .emptycart p.text {
  margin-top: 18px;
  color: #232628;
  font-size: 10px;
  letter-spacing: 0.4px;
}
section.main .emptycart a.home {
  display: inline-block;
  margin-top: 12px;
  width: 94px;
  height: 24px;
  line-height: 24px;
  background: #ff734c;
  border-radius: 22px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
}
section.main .guess {
  margin-top: 6px;
  padding-bottom: 40px;
  background-color: #fff;
}
section.main .guess-title {
  height: 46px;
  font-size: 13px;
  color: #232628;
  padding: 0 13px;
  line-height: 46px;
}
section.main .guess-list {
  font-size: 0;
  padding: 0 1.2%;
}
section.main .guess-item {
  display: inline-block;
  width: 48.08743169%;
  margin: 0 0.93333333% 6px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 3px 0.5px 0 #dee2e5;
  img {
    width: 100%;
  }
}
section.main .guess-item-detail {
  height: 42px;
  padding: 0.5px 6px;
}
section.main .guess-item-detail .guess-item-info {
  font-size: 12px;
  color: #232628;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
section.main .guess-item-detail .guess-item-price {
  margin-top: 0.5px;
  font-size: 12px;
  color: #FF734C;
}
section.main .guess-bottom {
  height: 30px;
  margin-top: 2px;
  text-align: center;
  font-size: 10px;
  line-height: 30px;
  color: #71797F;
}
</style>
