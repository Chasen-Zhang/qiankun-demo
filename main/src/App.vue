<template>
  <div id="root" class="main-container">
    <template v-if="!isChildApp">
      <router-view></router-view>
    </template>
    <MainLayout v-show="isChildApp" :loading="loading" :content="content"></MainLayout>
  </div>
</template>
<script>
import MainLayout from "@/components/main-layout.vue";
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
      if (this.$route.path.match("subapp")) {
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
