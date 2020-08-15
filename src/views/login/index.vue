<template>
  <div class="login-content">
    <div class="login">
      <h1>登录-越秀管理系统</h1>
      <div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          label-position="left"
          label-width="0px"
          class="login-form"
        >
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              auto-complete="off"
              placeholder="密码"
            >
              <i slot="prefix" class="el-input__icon el-icon-lollipop"></i>
            </el-input>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from "@/libs/token";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ]
      }
    };
  },
  created() { },
  methods: {
    handleLogin() {
      const user = this.loginForm;
      if (!user.username || !user.password) {
        this.$toast("请输入登录信息");
        return false;
      }
      this.loading = true;
      removeToken();
      window.sessionStorage.clear();
      // 节流
      this.disabled = true;
      this.$store
        .dispatch("user/Login", user)
        .then(() => {
          this.loading = false;
          this.$router.push({ path: "/home" });
        })
        .catch((e) => {
          this.loading = false;
          this.disabled = false;
          this.$toast(e.msg);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login-content {
  width: 100vw;
  height: 100vh;
}
.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-size: cover;
  background-position: 230px 85px;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 380px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login {
  .el-tabs {
    width: 380px;
    height: 365px;
    background-color: #fff;
  }
  .el-tabs__nav {
    width: 100%;
    .el-tabs__active-bar {
      width: 50%;
    }
    .el-tabs__item {
      width: 50%;
      text-align: center;
    }
  }
}
</style>
