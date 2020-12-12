<template>
<h1>Option Style</h1>
  <button @click="onClick">{{counter}}</button>
  <hr>
  <Demo1RefAndReactive/>

  <hr>
  <Demo2CounterHook/>

  <hr>
  <Demo3LifeCycleHooks/>
</template>

<script>
import Demo1RefAndReactive from "./components/Demo1RefAndReactive"
import Demo2CounterHook from "./components/Demo2CounterHook"
import Demo3LifeCycleHooks from "./components/Demo3LifeCycleHooks"

export default {
  components:{Demo1RefAndReactive, Demo2CounterHook, Demo3LifeCycleHooks},
  
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick(){
      this.counter++
    }
  },
}
</script>

<style>

</style>