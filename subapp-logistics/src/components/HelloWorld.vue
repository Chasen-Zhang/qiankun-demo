<template>
  <div>
    <el-button>2</el-button>
    <el-select v-model="value">
      <el-option value="1">
        3333
      </el-option>
    </el-select>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Select, Option } from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: '1'
    };
  }
};
</script>
<style scoped lang="less">

</style>
