<template>
  <div class="sub-container">
    <div class="header">
      <s2b-header></s2b-header>
    </div>
    <el-row class="content">
      <el-col class="nav" :span="4">
        <s2b-nav></s2b-nav>
      </el-col>
      <el-col :span="20">
        <template v-if="!isChildApp || isCommon">
          <router-view />
        </template>
        <div
          v-show="isChildApp && !isCommon"
          id="sub-app-layout"
          class="app-view-box"
          v-html="content"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import nav from "./nav";
import navHeader from "./header";
import { Col, Row } from "element-ui";

Vue.use(Col);
Vue.use(Row);
export default {
  components: {
    "s2b-nav": nav,
    "s2b-header": navHeader
  },
  props: {
    content: {
      type: String,
      default: ""
    },
    isChildApp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCommon: false // 是否是公共页面
    };
  },
  created() {
    console.log(this.$route.meta);
  },
  methods: {},
  watch: {
    $route(val) {
      this.isCommon = val.meta.isCommon;
    }
  }
};
</script>

<style lang="less" scoped>
.sub-container {
  height: 100%;
}
.content {
  height: 100%;
}
.header {
  height: 60px;
  line-height: 60px;
  background: #434849;
  padding-left: 20px;
  font-size: 12px;
  color: #fff;
}
.subapp-loading {
  background: url("~@/assets/images/loading.gif");
}
.nav {
  height: 100%;
  background-color: rgb(84, 92, 100);
}
</style>>

