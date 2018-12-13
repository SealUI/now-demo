<template>
  <div :class="$style.demo">
    <div :class="$style.step">
      <div :class="[$style.stepLine,$style.clear]" id="line">
        <template v-for="n in list">
          <span :key="n" :class="$style.dot" :style="{ left: 60 + (n-1) * 120 + 'px' }"></span>
        </template>
        <template v-for="n in list">
          <div :key="n" :class="$style.box">{{n}}</div>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
  .box{
    width:100px;
    height:200px;
    background:#fff;
    float:left;
    margin:0 10px;
  }
  .clear:after,
  .clear:before{content:" ";display:table}
  .clear:after{clear:both}
  .step{
    width:600px;
    background:#dc0000;
    overflow:auto;
    margin:0 auto
  }
  .stepLine{
    width:3000px;
    position: relative;
    padding:40px 0 40px 0;
    &::before{
      position: absolute;
      content:'';
      height:5px;
      display:block;
      background:$--color-primary;
      left:10px;
      right:10px;
      top:20px;
    }
  }
  .dot{
    width:10px;
    height:10px;
    border-radius: 1000px;
    background:$--color-success;
    display:block;
    position: absolute;
    top:18px;
    left:50px
  }
</style>
<script>
export default {
  name: 'Hello',
  data () {
    return {
      list: null
    }
  },
  props: {
    msg: String
  },
  mounted () {
    this.$nextTick(() => {
      this.list = Number(this.$route.query.num)
      document.getElementById('line').style.width = this.list * 120 + 'px'
    })
  }
}
</script>
