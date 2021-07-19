<template>
  <div id="homepage">
    homepage 首页
      <text-part/>
    <!-- 中部 -->
    <div class="homePage-content">
      <learning-world/>
      <professional-introduction path="/professionalIntroduction"/>
      <university-life path="/universityLife"/>
    </div>
  </div>
</template>

<script>
  import textPart from './textPart.vue';
  import learningWorld from './hp-learningWorld.vue';
  import professionalIntroduction from './hp-professionalIntroduction.vue';
  import universityLife from './hp-universityLife.vue';

  export default {
    name: 'homepage',
    data() {
      return {

      }
    },
    components: {
      textPart,
      learningWorld,
      professionalIntroduction,
      universityLife
    }
  }
</script>

<style scoped>
  #homepage {
    width: 100%;
    min-width: 1200px;
  }

  .homePage-content {
    width: 100%;
    height: auto;
    /* border: 1px solid #00f; */
  }
</style>
