<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录 </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录 </span>
        </template>
        <login-phone />
      </el-tab-pane>
      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
    </el-tabs>

    <el-button @click="handleLoginClick" type="primary" class="login-btn"
      >立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "@/views/login/cpns/login-phone.vue";

export default defineComponent({
  components: { LoginPhone, LoginAccount },
  setup() {
    const isKeepPassword = ref(false);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const handleLoginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value);
    };
    return { isKeepPassword, handleLoginClick, accountRef };
  },
});
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;

  .account-control {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }

  .el-tabs {
    height: 220px;
  }

  .title {
    text-align: center;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
