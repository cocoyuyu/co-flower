<template>
  <div class="page-login-r">
    <h1>登录注册页面</h1>
    <div class="login">
      <div class="login-item">
        <div class="login-item-title">手机号</div>
        <div class="login-item-info">
          <input
            placeholder="请输入手机号"
            autocomplete="off"
            type="tel"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="11"
          />
          <!---->
        </div>
      </div>
      <div class="login-item">
        <div class="login-item-title">验证码</div>
        <div class="login-item-info">
          <input
            placeholder="请输入验证码"
            autocomplete="off"
            type="tel"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="6"
          />
          <!---->
          <div class="login-item-info-btn">获取验证码</div>
        </div>
      </div>
      <button class="to-login">手机登录/注册</button>
      <div class="login-by-password">账号密码登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginR'
}
</script>

<style lang="scss" scoped>
.login-item + .login-item {
  margin-top: 1.78571429rem;
}
.login-item-tips {
  font-size: 0.85714286rem;
  color: #ff734c;
  margin-bottom: 1.78571429rem;
  margin-top: 0.14285714rem;
}
.login-item-title {
  font-size: 0.92857143rem;
}
.login-item-info {
  margin-top: 0.28571429rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.login-item-info > input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.21428571rem;
  outline: none;
  border: none;
  padding: 0.5rem 0 0.5rem 0.14285714rem;
  color: #232628;
}
input::-webkit-input-placeholder {
  font-size: 1.07142857rem;
  color: #b4babf;
}
input::-moz-placeholder {
  font-size: 1.07142857rem;
  color: #b4babf;
}
input:-ms-input-placeholder {
  font-size: 1.07142857rem;
  color: #b4babf;
}
input::-ms-input-placeholder {
  font-size: 1.07142857rem;
  color: #b4babf;
}
input::placeholder {
  font-size: 1.07142857rem;
  color: #b4babf;
}
.login-item-info-icon {
  width: 3.14285714rem;
  text-align: center;
  cursor: pointer;
  color: #b4babf;
}
.login-item-info-btn {
  padding: 0.28571429rem 0.57142857rem;
  color: #71797f;
  font-size: 0.92857143rem;
  white-space: nowrap;
  text-align: center;
}
.login-item-info-btn.active {
  color: #ff734c;
}
.to-login {
  margin-top: 2.92857143rem;
  height: 3rem;
  line-height: 3rem;
  background: #ff734c;
  color: #fff;
  font-size: 1.21428571rem;
  border-radius: 1.5rem;
  width: 100%;
  text-align: center;
  border: 0.07142857rem solid #ff734c;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.login-by-password {
  margin-top: 2.14285714rem;
  color: #71797f;
  font-size: 1.21428571rem;
  text-align: center;
}
</style>
