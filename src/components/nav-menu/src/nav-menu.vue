<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      :background-color="'#001529'"
      default-active="2"
      :text-color="'#b7bdc3'"
      :active-text-color="'#0a60bd'"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!--二级菜单-->
        <template v-if="item.type === 1">
          <!--二级菜单可以展开的标题-->
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);
    return { userMenus };
  },
});
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      line-height: 28px;
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu-vertical {
    border: 0;

    .el-menu-item {
      background-color: #0c2135 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }
}
</style>
