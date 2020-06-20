<template>
  <el-row>
    <el-col :span="22">
      <span>您好，zfseller，欢迎来到1233平台，退出登录</span>
      <el-button @click="testEmit">父组件数据传到子组件</el-button>
    </el-col>
    <el-col :span="2">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        :router="true"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-submenu index="2">
          <template slot="title">切换服务商</template>
          <el-menu-item v-show="$route.path.match('subapp-marketing')" index="/subapp-logistics">物流</el-menu-item>
          <el-menu-item v-show="$route.path.match('subapp-logistics')" index="/subapp-marketing">营销</el-menu-item>
          <!-- <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>-->
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import Vue from "vue";
import { Menu, Submenu, MenuItem, MenuItemGroup, Button } from "element-ui";
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);
export default {
  data() {
    return {
      activeIndex: "/subapp-logistics"
    };
  },
  methods: {
    handleSelect(e) {},
    testEmit() {
      this.$appBus.$emit("fatherTest", "主应用的消息");
    }
  }
};
</script>

<style>
</style>