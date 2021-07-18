<template>
  <div>
    <div class="left"><slot name="left"></slot></div>
    <div class="cneter"><slot name="cneter"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
</style>
