<template>
  <div id="lw">
    <lw-text/>
    <div class="homePage_LW_identity">
      <div class="homePage_LWid_box">
        <identity-box>
          <img slot="idBox-icon" src="../../assets/image/homepage/homePage_highSchoolStudent_head.png" alt=""/>
          <h3 class="idBox-text" solt="idBox-text">高中生</h3>
          <ul solt="idBox-message">
            <li>高中/高考</li>
            <li>学习方法/经验</li>
            <li>资源分享</li>
          </ul>
        </identity-box>
      </div>
    </div>

  </div>
</template>

<script>
  import identityBox from './hp-module/hp-identityBox.vue';
  import lwText from './hp-module/hp-lwText.vue';

  export default {
    name: 'learingWorld',
    data() {
      return {

      }
    },
    components: {
      lwText,
      identityBox,
    }
  }
</script>

<style scoped>
  #lw {
    width: 100%;
    min-width: 1200px;
    height: 1200px;
    border: 1px solid #f00;
  }

  /* ——————————— 身份该有的功能 ————————————————— */
  .homePage_LW_identity{
    /* max-width: 1600px; */
    /* max-width: 1260px; */
    margin: 0 auto;
    width: 100%;
    height: 420px;
    position: relative;
    background: url(../../assets/image/homepage/homePage_LearningWorld_headLamp.png) no-repeat 55px 0;
    background-size: 100%;
  }

  .homePage_LWid_box{
    /* width: 720px; */
    /* height: 250px; */
    width: 57%;
    height: 70%;
    position: absolute;
    top: 42px;
    right: 46px;
    display: flex;
    flex-direction: row;
    /* border: 1px solid #f00; */
  }

  /* ———————————————— 每个盒子内的内容 —————————————————— */
  img {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    position: absolute;
    left: calc(50% - 50px);
    display: block;
    z-index: 5;
    border: 5px solid rgba(255,255,255,.3);
    border-radius: 50%;
  }

  /* 头像的扩散动画效果 */
  /* .identityBox:hover .homePage_LWid_boxImg{
    transition: all ease-in-out .8s;
  } */

  .idBox-text {
    padding: 15px;
    position: absolute;
    top: 110px;
    left: calc(50% - 58px);
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 6px;
    color: #fff;
    z-index: 5;
    text-shadow: .1px .1px .1px rgba(0,0,0,.8);
    transition: all ease-in-out .5s;
    border: 1px solid #f00;
  }

  /* .identityBox:nth-child(3) h3{left: calc(50% - 45px);} */
</style>
