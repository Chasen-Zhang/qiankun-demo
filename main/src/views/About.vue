<template>
  <div style="color:red;font-weight:bold;font-size:16px;">
    共享父组件（222动态主应用组件）,我是主应用传来的组件”, props{{text}}
    <el-button @click="requestTest">父应用button请求数据</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { requestGet } from "@/library/js/http";
// import ElButton from "element-ui/packages/button";
// import ElTable from "element-ui/packages/table";
// import ElTableColumn from "element-ui/packages/table-column";
import { Button, Table, TableColumn } from "element-ui";
export default {
  name: "TestContainer",
  components: {
    ElButton: Button,
    ElTable: Table,
    ElTableColumn: TableColumn
  },
  props: {
    text: {
      type: String,
      default: ""
    }
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
    };
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
