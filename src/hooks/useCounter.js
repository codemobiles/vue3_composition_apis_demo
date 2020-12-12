import { ref, reactive } from "vue";

function useCounterRef(initial) {
  // ref composition api
  const counter = ref(initial); // number, string, boolean
  function onClick() {
    counter.value++;
  }

  return { counterRef: counter, onClickRef: onClick };
}

function useCounterRt(initial) {
  // reactive composition api
  const counterRt = reactive({ counter: initial });
  function onClickRt() {
    counterRt.counter++;
  }

  return { counterRt, onClickRt };
}

export default { useCounterRef, useCounterRt };
