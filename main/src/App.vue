<template>
  <div id="root" class="main-container">
    <template v-if="!isChildApp">
      <router-view></router-view>
    </template>
    <MainLayout v-show="isChildApp" :isChildApp="isChildApp" :content="content"></MainLayout>
  </div>
</template>
<script>
import MainLayout from "@/components/app-frame/main-layout.vue";
export default {
  components: {
    MainLayout
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChildApp() {
      let { path } = this.$route;
      console.log(path);
      if (path.match("subapp-") || path.match("common-")) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.main-container {
  height: 100%;
}
</style>
