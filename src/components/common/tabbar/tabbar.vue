<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from '../../content/mainTabbar/TabBarItem.vue';
  import Search from '../search/Search.vue';

  export default {
    name: 'TabBar',
    data() {
      return {

      }
    },
    components: {
      TabBarItem,
      Search
    }
  }
</script>

<style scoped>
  #tab-bar {  /*topmargin_box*/
    display: flex;
    position: relative;
    margin: 0 auto 10px;
    width: 1200px;
    height: 55px;
    background-color: #fff;
    /* border: 1px solid #f00; */
  }
</style>
