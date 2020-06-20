<template>
  <div class="about">
    <h1>This is an about page</h1>
    <com></com>
  </div>
</template>
<script>
const com = () => import("@/library/ui/wl-container");
console.log(com);
export default {
  components: {
    com
  }
};
</script>
