<template>
  <div class="header-type">
    <aside class="catebox-menu">
      <div
        class="catebox-menu-item"
        :class="{ active: index === activeIndex }"
        v-for="(item, index) in types"
        :key="item.id"
        @click="handleClick(item,index)"
      >
        <router-link to="/all" class="catebox-menu-item-link">{{ item.description }}</router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'HeaderType',
  data () {
    return {
      // 当前选中的数组元素的下标
      activeIndex: 0
    }
  },
  props: {
    types: {
      type: Array
      // 属性类型为引用类型时要设置默认值必须要写成函数返回对象的形式
      // default () { return [] }
    }
  },
  methods: {
    handleClick (type, index) {
      // type接受的是方法传递来的item值
      // 接收点击的元素的索引，把它赋给定义好的用来判断的变量，为真则拥有active类名
      this.activeIndex = index
      // 子父通信-1，通过方法触发一个自定义事件并传递参数，通知父组件
      // payload 传递多个值时要以对象的形式
      this.$emit('click', { type, index })
    }
  }
}
</script>

<style lang="scss" scoped>
.catebox-menu {
  position: absolute;
  top: 38px;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 21.06666667%;
  border-right: 1px solid #e9ecf0;
  transform: translate3d(0, 0, 0);
  overflow-x: hidden;
  overflow-y: auto;

  font-size: 14px;
}
.catebox-menu-item {
  width: 100%;
  height: 56px;
  line-height: 56px;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.catebox-menu-item::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 2px;
  height: 28px;
  transform: translateY(-50%);
  background-color: transparent;
}
.catebox-menu-item > a {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.catebox-menu-item.active {
  color: #ff734c;
}
.catebox-menu-item.active::before {
  background-color: #ff734c;
}
</style>
