<template>
  <h1>Demo1RefAndReactive</h1>
  <button @click="onClick">Ref : {{ counter }}</button>
  <button @click="onClickRt">Reactive : {{ counterRt.counter }}</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    // ref composition api
    const counter = ref(0); // number, string, boolean
    function onClick() {
      counter.value++;
    }

    // reactive composition api
    const counterRt = reactive({ counter: 0 });
    function onClickRt() {
      counterRt.counter++;
    }

    // return data and method 
    return { counter, onClick, counterRt, onClickRt };
  },
};
</script>

<style></style>
