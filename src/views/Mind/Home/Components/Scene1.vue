<template>
  <div class="scene-item scene-item-radius">
    <router-link to="/" class="navigation">
      <img :src="info.imgUrl" :alt="info.title" />
      <span class="scene-item-use-title">{{ info.title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Scene1',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
.scene-item-use-title {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
}
</style>
