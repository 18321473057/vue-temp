<template>
   <h1>{{testMsg}}</h1>
</template>

<script>
export default {
  name: 'Test',
  props: {
    testMsg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1{
  color: rebeccapurple;
}
</style>
