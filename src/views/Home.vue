<template>
  <div :class="$style.home">
    <div :class="$style.hd">
      <h1></h1>
    </div>
    <div :class="$style.bd">
      <Hello msg="🍋 🍊 🍑 🍒 🍎 🍓 🍇 🍌 🍉 🥝 🌽 🌶 🌷 🌹 💋 👙"></Hello>
    </div>
    <div :class="$style.ft"></div>
    <!-- <img src="https://www.gitbook.com/public/images/e793720801423d21776871e5e7baf99b.png" />
    <img alt="logo" src="https://www.gitbook.com/public/images/5b3870861c322cff7f18099debb3ec4a.svg"> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang="scss" module>
  .home{
    width:100%;
    max-width:800px;
    margin:0 auto;
    border-radius: 4px;
    border:1px solid #d4dadf;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    pointer-events: auto;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(116, 129, 141, 0.1);
    .hd{
      display: block;
      padding: 32px 40px;
      background: $--color-primary-light-1;
      color: #FFFFFF;
      font-size: 1.5rem;
      font-family: Baloo,cursive;
    }
    .bd{
      padding:20px;
      color:$--color-primary-light-1
    }
    .ft{
      border-top:1px solid #d4dadf;
      height:50px;
      background:#fbfbfb
    }
  }
</style>
