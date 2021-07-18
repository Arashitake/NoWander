<template>
  <div id="homepage">
    homepage 首页
    <text-part/>
    <!-- 中部 -->
    <div class="homePage-content">
      <learning-world/>
    </div>
  </div>
</template>

<script>
  import textPart from './textPart.vue';
  import learningWorld from './hp-learningWorld.vue';

  export default {
    name: 'homepage',
    data() {
      return {

      }
    },
    components: {
      textPart,
      learningWorld
    }
  }
</script>

<style scoped>
  #homepage {
    width: 100%;
    min-width: 1200px;
  }

  .homePage-content {

    border: 1px solid #00f;
  }
</style>
