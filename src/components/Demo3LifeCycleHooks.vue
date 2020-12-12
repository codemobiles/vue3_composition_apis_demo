<template>
  <h1>Demo3LifeCycleHooks</h1>
  <hr />
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("onMounted1");
    });

    onMounted(() => {
      console.log("onMounted2");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });
  },
};
</script>

<style></style>
