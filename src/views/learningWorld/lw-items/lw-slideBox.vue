<template>
  <div class="LearningWorld-TA-slideBox">
    <ul>
      <li>
        <slot name="edit-part"></slot>
      </li>
      <li class="LearningWorld-toPosition">
        <slot name="jump-position"></slot>
      </li>
      <li class="LearningWorld-returnTopBtn" @click="JumptoLWTop">回到顶部</li>
    </ul>
  </div>
</template>

<script>
  import modelsObj from '../../../assets/javascript/utils/models.js';

  export default {
    name: 'slideBox',
    data() {
      return {

      }
    },
    methods: {
      JumptoLWTop() {
        modelsObj.slowToTop();
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  /* ——————— 左边上下滑动Part ————————— */
  .LearningWorld-TA-slideBox{
    width: 272px;
    /* height: 385px; */
    margin: 0 0 0 6px;
    border-radius: 5px;
    background: #fff;
    /* border: 1px solid #00f; */
  }

  /* 装内容 */
  .LearningWorld-TA-slideBox > ul{
    margin-top: 20px;
    height: 365px;
    list-style-type: none;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(204, 204, 204,0.6);
    /* border: 1px solid #333; */
  }

  .LearningWorld-TA-slideBox > ul > li{
    margin: 0 5px;
  }

  .LearningWorld-TA-slideBox > ul > li:nth-child(2),
  .LearningWorld-TA-slideBox > ul > li:nth-child(3) {
    /* width: 262px; */
    width: 100%;
    margin-left: 0;
    padding: 17px 0;
    text-align: center;
    /* border-radius: 4px; */
    border-top: 1px solid #e8e8e8;
    cursor: pointer;
    transition-duration: 0.3s;
    background: url(../../../assets/image/learningWorld/content/backTop3.png) 156px 19px no-repeat;
    background-size: 15px 17px;
  }

  .LearningWorld-TA-slideBox > ul > li:nth-child(3) {
    background: url(../../../assets/image/learningWorld/content/backTop2.png) 174px 19px no-repeat;
    background-size: 16px 18px;
  }

  .LearningWorld-TA-slideBox > ul > li:nth-child(2):hover,
  .LearningWorld-TA-slideBox > ul > li:nth-child(3):hover {
    background: #efefef;
  }
</style>
