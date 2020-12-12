<template>
  <h1>Demo2CounterHook</h1>
  <button @click="onClickRef">Ref : {{counterRef}}</button>  
  <button @click="onClickRt">Reactive : {{counterRt.counter}}</button>  
  <hr>
</template>

<script>
import useCounter from "./../hooks/useCounter"
export default {
  setup(){
    const {counterRef, onClickRef} = useCounter.useCounterRef(0)
    const {counterRt, onClickRt} = useCounter.useCounterRt(0)

    return {counterRef, onClickRef, counterRt, onClickRt}
  }
}
</script>

<style>

</style>