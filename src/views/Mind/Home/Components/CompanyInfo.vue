<template>
  <div class="conpany-info">
    <div class="conpany-info-item">认证龙头企业</div>
    <div class="conpany-info-item">15年品牌</div>
    <div class="conpany-info-item">3小时送花</div>
    <div class="conpany-info-item">
      最近<a href="/productpj/"><u id="commentCount">361547</u></a
      >条好评
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo'
}
</script>

<style lang="scss" scoped>
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

</style>
