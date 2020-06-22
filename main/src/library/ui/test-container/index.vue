<template>
  <div style="color:red;font-weight:bold;font-size:16px;">
    共享父组件（动态主应用组件）,我是主应用传来的组件”, props{{text}}
    <el-button @click="requestTest">父应用button请求数据</el-button>
  </div>
</template>

<script>
import Vue from "vue";
import { requestGet } from "@/library/js/http";
import ElButton from "element-ui/packages/button";
export default {
  name: "WlContainer",
  components: {
    ElButton
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  created() {
    this.requestTest();
  },
  methods: {
    requestTest() {
      requestGet("https://getman.cn/mock/eeeee")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
