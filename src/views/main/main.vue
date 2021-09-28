<template>
  <el-container class="page">
    <el-aside :width="'210px'">
      <nav-menu />
    </el-aside>
    <el-container class="main">
      <el-header>
        <nav-header />
      </el-header>
      <el-main> Content</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header/src/nav-header.vue";

export default defineComponent({
  components: { NavHeader, NavMenu },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.page {
  height: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;

  &::-webkit-scrollbar {
    display: none;
  }
}

.main {
  overflow-y: auto;

  .el-header {
    height: 48px;
    background-color: #fff;
  }

  .el-main {
    background-color: rgb(240, 242, 245);
  }
}
</style>
