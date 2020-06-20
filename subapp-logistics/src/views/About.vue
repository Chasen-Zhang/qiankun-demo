<template>
  <div class="about">
    <h1 class="red">55555</h1>
    <button @click="requestComponent">发数据给主应用，数据为xxxxx</button>
  </div>
</template>
<script>
export default {
  beforeDestroy() {
    this.$appBus.$off("fatherTest");
  },
  mounted() {
    this.$appBus.$on("fatherTest", msg => {
      alert("子应用监听到" + msg);
    });
  },
  methods: {
    requestComponent() {
      this.$appBus.$emit("transitionComponent", "xxxxx");
    }
  }
};
</script>
