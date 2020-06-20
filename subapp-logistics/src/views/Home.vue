<template>
  <div class="home">
    333
    <com text="子应用数据"></com>
    <el-button @click="clickTest">第三方库测试</el-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "element-ui";
const com = window.getDynamicComponet("wl-container");
Vue.use(Button);
export default {
  name: "Home",
  components: {
    com
  },
  methods: {
    clickTest() {
      alert("click test");
    }
  }
};
</script>
