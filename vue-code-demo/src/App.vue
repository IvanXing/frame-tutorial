<template>
  <div id="app">
    <!-- 01.指令插值 -->
    <!-- <TplDemo/> -->
    <!-- 02.computed和watch -->
    <!-- <ComputedDemo /> -->
    <!-- <WatchDemo /> -->
    <!-- 03.样式 -->
    <!-- <ClassDemo /> -->
    <!-- 04.条件渲染 -->
    <!-- <ConditionDemo/> -->
    <!-- 05.列表渲染 -->
    <!-- <ListDemo /> -->
    <!-- 06.事件 -->
    <!-- <EventDemo /> -->
    <!-- 07.表单 -->
    <!-- <FormDemo /> -->

    <!-- 08.组件通讯 父子通信 this.props & this.$emit 自定义事件 event.$on evemt.$off-->
    <!-- 09.父子组件结合生命周期 -->
    <!-- <ComponentDemo/> -->

    <!-- 10. 高级特性 -->
    <!-- v-model $nextTick ref slot 动态异步组件  keep-alive  mixin -->
    <AdvancedUse/>




    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <CartDemo/> -->
  </div>
</template>

<script>
// import TplDemo from './components/BaseUse/TplDemo'
// import ComputedDemo from './components/BaseUse/ComputedDemo'
// import WatchDemo from './components/BaseUse/WatchDemo'
// import ClassDemo from './components/BaseUse/ClassDemo'
// import ConditionDemo from './components/BaseUse/ConditionDemo'
// import ListDemo from './components/BaseUse/ListDemo'
// import EventDemo from './components/BaseUse/EventDemo'
// import FormDemo from './components/BaseUse/FormDemo'
// import ComponentDemo from './components/ComponentsDemo/index'
import AdvancedUse from './components/AdvancedUse/index'




// import HelloWorld from './components/HelloWorld.vue'
// import CartDemo from './components/Cart/index'

export default {
  name: 'app',
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    // ClassDemo,
    // ConditionDemo,
    // ListDemo,
    // EventDemo,
    // FormDemo,
    // ComponentDemo,
    AdvancedUse,



    // HelloWorld
    // EventDemo
    // AdvancedUse
    // CartDemo
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
