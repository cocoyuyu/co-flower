<template>
  <section class="product">
    <h3 class="product-title">{{ info.bigTitle }}</h3>
    <div class="product-list">
      <div
        class="product-item product-item-horizontal"
        v-for="item2 in info.productList"
        :key="item2.ItemCode"
      >
        <router-link to="/" class="navigation">
          <div class="product-item-pic">
            <img :src="item2.imgUrl" :alt="item2.Cpmc" />
          </div>
          <div class="product-item-info">
            <p class="product-item-info-name text-overflow">
              {{ item2.Cpmc }}
            </p>
            <!--Dev:: text-overflow Or text-overflow-line2-->
            <!-- 限时抢购标签 tag-promo，同商品列表页  -->
            <p class="product-item-info-desc text-overflow ">
              {{ item2.Instro }}
            </p>
            <div class="product-item-info-tags">
              <span class="tag-promo">{{ item2.instro3 }}</span>
            </div>
            <div class="product-item-info-promo">
              {{ item2.Instro2 }}
            </div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p
                  class="product-item-info-prices"
                  :data-id="item2.ItemCode"
                  style="opacity: 1;"
                >
                  <strong>¥{{ item2.Price }}</strong
                  ><s>¥{{ item2.LinePrice }}</s>
                </p>
                <p class="product-item-info-sales">已销售{{ item2.Sales }}件</p>
              </div>
              <div
                class="product-item-info-bottom-right"
                :data-id="item2.ItemCode"
              >
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="product-more">
      <router-link to="/" class="product-more-btn">查看更多</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Product',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
.product-item.product-item-horizontal + .product-item.product-item-horizontal {
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
</style>
