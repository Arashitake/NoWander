<template>
  <div class="identityBox" id="">
    <!-- 标志图片 -->
    <div class="homePage_LWid_boxImg" >
      <slot name="idBox-icon"></slot>
      <!-- <img src="img/homePage_highSchoolStudent_head.png" alt="" /> -->
    </div>
    <slot name="idBox-text"></slot>
    <!-- <h3>高中生</h3> -->
    <br />
    <slot name='idBox-message'></slot>
    <!-- <ul>
        <li>高中/高考</li>
        <li>学习方法/经验</li>
        <li>资源分享</li>
    </ul> -->
    <button>
        <a href="">进入</a>
    </button>
    <a class="homePage_expend">
        <span class="homePage_plus">+</span>
        <span class="homePage_minus">-</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'identityBox',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .identityBox{
    /* height: 232px; */
    width: 30%;
    max-width: 218px;
    height: 93%;
    position: relative;
    margin-left: 38px;
    border-radius: 4px;
    background-color: #95c9ae;
    overflow: hidden;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  }
/* ----------------------------------------- */
  .identityBox .homePage_LWid_boxImg{
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
  .identityBox:hover .homePage_LWid_boxImg{
    transition: all ease-in-out .8s;
  }
/* ----------------------------------------- */
  .identityBox h3{
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
  }

  .identityBox:nth-child(3) h3{left: calc(50% - 45px);}

  /* 点击后才出现的部分 */
  .identityBox ul{
    margin-top: 400px;
    margin: 400px 0 25px 50px;
    line-height: 25px;
    font-size: 14px;
    list-style-type: disc;
    color: #fff;
    position: absolute;
    z-index: 10;
    transition: all ease-in-out .5s;
  }

  .identityBox ul li{
    letter-spacing: 2px;
    font-size: 12.5px;
  }

  /* 点击进入的按钮 */
  .identityBox button{
    margin-bottom: 10px;
    position: absolute;
    bottom: -50px;
    left: 55px;
    font-size: 12px;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 10px rgba(0,0,0,.1);
    transition: all ease-in-out .5s;
  }

  .identityBox button > a{
    padding: 5px 30px;
    display: inline-block;
    text-decoration: none;
    color: #95c9ae;
    font-weight: bold;
  }

  /* "+" 和 "-" */
  .identityBox a.homePage_expend{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 50%;
    bottom: 30px;
    transform: translateX(50%);
    display: block;
    border-radius: 50%;
    background: #fff;
    line-height: 40px;
    text-align: center;
    transition: all ease-in-out .5s;
    cursor: pointer;
  }

  .identityBox a.homePage_expend .homePage_plus{
    width: 40px;
    display: inline-block;
    opacity: 1;
    color: #787878;
    font-size: 24px;
  }

  .identityBox a.homePage_expend .homePage_minus{
    opacity: 0;
    color: #95c9ae;
    font-size: 24px;
  }

  /* —————————————— 有特殊属性 homePage_selected —————————————— */
  .identityBox.homePage_selected h3{
    width: 70%;
    top: 28px;
    left: 12%;
    z-index: 15;
    border-bottom: 1px solid rgba(255,255,255,0.8);
    transition: all ease-in-out .5s;
  }

  .identityBox.homePage_selected ul{
    opacity: 1;
    margin-top: 82px;
  }

  .identityBox.homePage_selected button{
    bottom: 20px;
    transition: all ease-in-out .5s;
  }

  /* 装加减号的盒子 */
  .identityBox.homePage_selected a.homePage_expend{
    width: 80px;
    height: 50px;
    position: absolute;
    right: -20px;
    bottom: -15px;
    display: block;
    background: #fff;
    transform: rotate(-45deg);
    transition: all ease-in-out .5s;
  }

  .identityBox.homePage_selected a.homePage_expend span{
    position: absolute;
    top: -5px;
    left: 40px;
    display: block;
    transform: rotate(45deg);
    font-size: 24px;
    transition: all ease-in-out .5s;
  }

  .identityBox.homePage_selected a.homePage_expend .homePage_minus{
    opacity: 1;
  }

  .identityBox.homePage_selected a.homePage_expend .homePage_plus{
    opacity: 0;
  }

  .identityBox.homePage_selected .homePage_LWid_boxImg{
    position: absolute;
    top: -20px;
    left: -5px;
    transform: scale(1.5);
    opacity: 0.5;
    transition: all ease-in-out 1s;
  }

  .identityBox.homePage_selected:hover .homePage_LWid_boxImg{
    animation: none;
  }
</style>
