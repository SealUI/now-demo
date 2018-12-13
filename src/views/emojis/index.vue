<template>
  <div :class="$style.emojis">
    <div :class="$style.tab" ref="tabs">
      <a href="javascript:;" :class="[{'active': emoji.category === cat}]" v-for="emoji in emojis" :key="emoji.id" @click="showTab(emoji.category)">{{emoji.category}}</a>
    </div>
    <div :class="$style.lists" v-for="emoji in emojis" :key="emoji.id" v-show="cat === emoji.category">
      <h2 :class="$style.hd">{{emoji.category}}</h2>
      <div :class="$style.bd">
        <div :class="$style.list">
          <i v-for="item in emoji.list" :key="item.id">{{item}}</i>
        </div>
      </div>
      <div :class="$style.ft"></div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '@/dom.js'
export default {
  name: 'Emojis',
  mixins: [],
  data () {
    return {
      emojis: [],
      cat: 'Foods'
    }
  },
  // 创建完成
  created () {

  },
  methods: {
    showTab: function (cat) {
      const tabs = this.$refs.tabs
      let a = tabs.querySelectorAll('a')
      for (let i in a) {
        removeClass(a[i - 1], 'active')
      }
      addClass(event.target, 'active')
      this.cat = cat
    },
    showData: async function () {
      let user = await this.fetchData_1()
      return user
    },
    fetchData_1: () => {
      // https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json
      return new Promise((resolve, reject) => {
        fetch('/emoji.json')
          .then((data) => {
            resolve(data.json())
          }, (error) => {
            reject(error)
          })
      })
    },
    fetchData: (apiURL) => {
      return new Promise((resolve, reject) => {
        // https://emoji.muan.co/javascripts/emojilib/emojis.json
        fetch('https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json')
        // fetch('https://raw.githubusercontent.com/EmojiHomepage/emoji-countries/master/emoji-countries.json')
          .then((data) => {
            resolve(data.json())
          }, (error) => {
            reject(error)
          })
      })
    }
  },
  computed: {

  },
  // 挂载完成
  mounted () {
    this.$nextTick().then(async () => {
      this.showData().then(res => {
        this.emojis = res
        // for (let item of res.EmojiDataArray) {
        //   this.emojis.push({
        //     category: item.CVDataTitle.split('-')[1],
        //     list: item.CVCategoryData.Data.split(',')
        //   })
        // }
      })
    })
  },
  // 数据更新完成
  updated () {
    this.$nextTick().then(() => {
      // todo
    })
  }
}
</script>
<style lang="scss">
.active{
  color:#fff !important;
  background:$--color-primary-light-1
}
</style>
<style lang="scss" module>
  .emojis{
    overflow:hidden;
    border-radius: 4px;
    width: 80%;
    margin:20px auto;
    font-size:20px;
    .hd{
      /*border-radius: 4px 4px 0 0;*/
      display: block;
      padding: 32px 40px;
      background: $--color-primary-light-1;
      color: #FFFFFF;
      font-size: 3rem;
      font-family: Baloo,cursive;
    }
    .bd{
      padding:10px 20px;
      background:$--color-white;
    }
    .ft{
      border-top:1px solid #d4dadf;
      height:50px;
      background:#fbfbfb;
      border-radius:0 0 4px 4px;
    }
    .lists{
      margin: 10px 0;
      box-shadow: 0 1px 1px 0 rgba(116, 129, 141, 0.1);
    }
    .list{
      margin:0 -10px;
    }
    i {
      font-family: "Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Segoe UI Symbol","Android Emoji",EmojiSymbols;
      font-size:5rem;
      margin: 15px;
      line-height:1;
      display:inline-block;
      cursor: pointer;
      background:rgba(230, 230, 230, 0.3);
      border-radius:3px;
      padding:10px;
      &:hover{
        background:rgba(230, 230, 230, 0.8);
        text-shadow: 0 0 1rem #000, 0 0 0.2rem #000, 0 0 0.2rem #000;
      }
    }
    .tab{
      text-align:left;
      background:#fff;
      margin-bottom:-15px;
      font-weight:bold;
      a{
        padding: 20px;
        text-decoration: none;
        display:inline-block;
        color:$--color-primary;
      }
    }
  }
</style>
