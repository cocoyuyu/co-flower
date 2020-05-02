<template>
  <div class="procate-item">
    <router-link to="/home" class="navigation">
      <img :src="info.imgUrl" :alt="info.alt" />
      <p>{{ info.alt }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavProcate',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.procate > .procate-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.procate > .procate-item img {
  width: 36px;
}
</style>
