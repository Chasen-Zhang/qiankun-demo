<template>
  <div style="color:red;font-weight:bold;font-size:16px;">
    共享父组件11（动态主应用组件）,我是主应用传来的组件”, props{{text}} {{a}}
    <el-button @click="requestTest">父应用button请求数据</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";
import { requestGet } from "@/library/js/http";
import { Button, Table, TableColumn,Scrollbar } from "element-ui";
// Vue.use(Button);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.component(Button.name, Button);
// Vue.component(Table.name, Table);
// Vue.component(TableColumn.name, TableColumn);
// Vue.use(Scrollbar)
export default {
  name: "TestContainer",
  components: {
    [Button.name]: Button,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      a: "test",
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
  mounted() {},
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
