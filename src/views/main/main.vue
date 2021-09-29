<template>
  <el-container class="page">
    <el-aside :width="isCollapse ? '60px' : '210px'">
      <nav-menu :collapse="isCollapse" />
    </el-aside>
    <el-container class="main">
      <el-header>
        <nav-header v-on:foldChange="handleFoldChange" />
      </el-header>
      <el-main> <div class="test"></div></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header/src/nav-header.vue";

export default defineComponent({
  components: { NavHeader, NavMenu },
  setup() {
    const isCollapse = ref<boolean>(false);
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    return { isCollapse, handleFoldChange };
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
  transition: width 0.3s linear;

  &::-webkit-scrollbar {
    display: none;
  }
}

.main {
  .el-header {
    height: 48px;
    background-color: #fff;
  }

  .el-main {
    background-color: rgb(240, 242, 245);
    .test {
      width: 20px;
      height: 1000px;
    }
  }
}
</style>
