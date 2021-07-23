<template>
  <div>
    用户个人界面
    <router-view></router-view>
  </div>
</template>

<script>
  import askPostShow from '../showPage/askPostShow.vue';
  export default {
    name: 'user',
    data() {
      return {

      }
    },
    components: {
      askPostShow
    }
  }
</script>

<style scoped>
</style>
