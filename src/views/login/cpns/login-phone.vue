<template>
  <div class="login-phone">
    <el-form label-width="60px" :model="account">
      <el-form-item label="手机">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="account.code" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const account = reactive({
      phone: "",
      code: "",
    });
    return {
      account,
    };
  },
});
</script>

<style lang="less" scoped></style>
