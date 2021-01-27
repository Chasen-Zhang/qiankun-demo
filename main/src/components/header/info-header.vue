<template>
  <div class="header global-flex global-cfff global-f12">
    <div>
      <span>您好，{{}}，欢迎来到1233平台，</span>
      <span>退出登录</span>
    </div>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          会员中心
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in centerData" :key="index">{{item.title}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="drop" :hide-on-click="false">
        <span class="el-dropdown-link">
          客服中心
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in serviceData" :key="index">{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <a class="drop" href="#">消息中心</a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "element-ui";
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  data() {
    return {
      activeIndex: "1",
      centerData: [
        { title: "买家中心", link: "#" },
        { title: "卖家中心", link: "#" },
        { title: "服务中心", link: "#" }
      ],
      serviceData: ["邮箱：service@1233s2b.com", "客服电话：4006861233"]
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>

<style lang='less' scoped>
.header {
  height: 36px;
  background-color: #434849;
  padding: 0 35px;
  justify-content: space-between;
  align-items: center;
  .drop {
    margin-left: 20px;
    color: #fff;
  }
}
/deep/ .el-dropdown {
  color: #fff;
  cursor: pointer;
}
/deep/ .el-dropdown {
  font-size: 12px;
}
</style>