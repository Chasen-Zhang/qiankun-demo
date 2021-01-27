<template>
  <div class="home">
    <com text="子应用数据"></com>
    <!-- <el-button @click="clickTest">第三方库测试</el-button> -->



    <!-- <span>-----------------------------------------</span> -->
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Button} from "element-ui";
// const com = window.getDynamicComponet("test-container");
console.log(window.commonComponent.com, 'window.commonComponent.com')
Vue.use(Button);
export default {
  name: "Home",
  components: {
     com: window.commonComponent.com
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    }
  },  
  methods: {
    clickTest() {
      alert("click test");
    }
  }
};
</script>
