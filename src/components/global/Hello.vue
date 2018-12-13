<template>
  <div :class="$style.hello">
    <template v-for="item in tpl">
      <span v-html="item" :key="item"></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      tpl: []
    }
  },
  props: {
    msg: String
  },
  computed: {
    showTpl () {
      return this.tpl.join('')
    }
  },
  mounted () {
    this.$nextTick().then((res) => {
      let _msg = this.msg.split(' ')
      for (let item of _msg) {
        this.tpl.push(`<i>${item}</i>`)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
  .hello{
    line-height:1.5;
    span{
      padding:10px;
      font-size:5rem;
      font-family:"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Segoe UI Symbol","Android Emoji",EmojiSymbols;
      display:inline-block;
      cursor:pointer;
      &:hover{
        text-shadow:0 0 1rem #000,0 0 .2rem #000,0 0 .2rem #000
      }
    }
  }

</style>
