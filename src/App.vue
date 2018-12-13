<template>
  <div :id="$style.app">
    <!-- <div :class="$style.nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">测试</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss" module>
#app {
  text-align: center;
  display:flex;
  flex-direction: column
}
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding:0 15px;
  }
}
</style>
