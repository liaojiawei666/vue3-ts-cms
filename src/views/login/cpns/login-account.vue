<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "@/views/login/config/account-config";
import { ElForm } from "element-plus";
import cache from "@/utils/cache";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const formRef = ref<InstanceType<typeof ElForm>>();
    const account = reactive({
      name: cache.getCache("name") ?? "",
      password: cache.getCache("password") ?? "",
    });
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            cache.setCache("name", account.name);
            cache.setCache("password", account.password);
          } else {
            cache.deleteCache("name");
            cache.deleteCache("password");
          }
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };
    return {
      account,
      rules,
      loginAction,
      formRef,
    };
  },
});
</script>

<style lang="less" scoped></style>
