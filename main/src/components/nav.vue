<template>
  <el-menu
    default-active="2"
    :router="true"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/subapp-logistics">物流菜单一</el-menu-item>
        <el-menu-item index="/subapp-logistics/about">物流菜单二</el-menu-item>
        <el-menu-item index="/subapp-marketing">营销菜单一</el-menu-item>
        <el-menu-item index="/subapp-marketing/about">营销菜单二</el-menu-item>
      </el-menu-item-group>
    </el-submenu>-->
    <el-menu-item index="/subapp-logistics">物流菜单一</el-menu-item>
    <el-menu-item index="/subapp-logistics/about">物流菜单二</el-menu-item>
    <el-menu-item index="/subapp-marketing">营销菜单一</el-menu-item>
    <el-menu-item index="/subapp-marketing/about">营销菜单二</el-menu-item>
  </el-menu>
</template>

<script>
import Vue from "vue";
import { Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
export default {
  methods: {
    handleOpen(e) {},
    handleClose(e) {}
  }
};
</script>

<style>
</style>