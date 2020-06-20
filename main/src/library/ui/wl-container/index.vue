<template>
  <div style="color:red;font-weight:bold;font-size:16px;">共享父组件（动态主应用组件）,我是主应用传来的组件”</div>
</template>

<script>
export default {
  name: "WlContainer",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
