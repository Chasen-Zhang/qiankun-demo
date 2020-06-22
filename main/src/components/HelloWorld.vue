<template>
  <div>
    <el-button>2</el-button>
    <el-select v-model="value">
      <el-option value="1">3333</el-option>
    </el-select>
  </div>
</template>

<script>
import Vue from "vue";
import ElButton from "element-ui/packages/button";
import ElSelect from "element-ui/packages/select";
import ElOption from "element-ui/packages/option";
export default {
  name: "HelloWorld",
  data() {
    return {
      value: "1"
    };
  }
};
</script>
<style scoped lang="less">
</style>
