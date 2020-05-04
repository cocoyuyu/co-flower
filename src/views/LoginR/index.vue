<template>
  <div class="page-login-r">
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
      <button @click="handleClick">点击获取本地存储数据</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginR',
  methods: {
    handleClick () {
      window.localStorage.getItem('key')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  box-sizing: border-box;
  padding: 40px 20px 0 20px
}
.login-item + .login-item {
  margin-top: 20px;
}
.login-item-tips {
  font-size: 13px;
  color: #ff734c;
  margin-bottom: 20px;
  margin-top: 2px;
}
.login-item-title {
  font-size: 13px;
}
.login-item-info {
  margin-top: 3px;
  display: flex;
  align-items: center;
}
.login-item-info > input {
  flex: 1;
  font-size: 14px;
  outline: none;
  border: none;
  padding: 6px 0 0.5rem 2px;
  color: #232628;
}
input::-webkit-input-placeholder {
  font-size: 12px;
  color: #b4babf;
}
input::placeholder {
  font-size: 12px;
  color: #b4babf;
}
.login-item-info-icon {
  width: 36px;
  text-align: center;
  cursor: pointer;
  color: #b4babf;
}
.login-item-info-btn {
  padding: 3px 6px;
  color: #71797f;
  font-size: 13px;
  white-space: nowrap;
  text-align: center;
}
.login-item-info-btn.active {
  color: #ff734c;
}
.to-login {
  margin-top: 42px;
  height: 42px;
  line-height: 28px;
  background: #ff734c;
  color: #fff;
  font-size: 14px;
  border-radius: 17px;
  width: 100%;
  text-align: center;
  border: 8px solid #ff734c;
  outline: none;
  appearance: none;
  transition: 0.3s;
}
.login-by-password {
  margin-top: 24px;
  color: #71797f;
  font-size: 14px;
  text-align: center;
}
</style>
