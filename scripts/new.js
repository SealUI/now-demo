'use strict'

process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[模块名称]必填 - Please enter new module name')
  process.exit(0)
}

const path = require('path')
const fileSave = require('file-save')
const ora = require('ora')
const chalk = require('chalk')
const uppercamelcase = require('uppercamelcase')
const modulename = process.argv[2]
const chineseName = process.argv[3] || modulename
const ModuleName = uppercamelcase(modulename)

const ModulePath = path.resolve(__dirname, '../src')

const spinner = ora(`创建 ${chineseName} 模块...`).start()

const Files = [
  {
    filename: path.join(`views/${modulename}`, `index.vue`),
    content: `<template>
  <div :class="$style.${modulename}">

  </div>
</template>

<script>
export default {
  name: '${ModuleName}',
  mixins: [],
  data () {
    return {

    }
  },
  // 创建完成
  created () {

  },
  methods: {

  },
  computed: {

  },
  // 挂载完成
  mounted () {
    this.$nextTick().then(() => {

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

<style lang="scss" module>
  .${modulename}{

  }
</style>`
  },
  // 路由
  {
    filename: path.join(`router/modules`, `${modulename}.js`),
    content: `export default [
  {
    path: '/${modulename}',
    name: '${ModuleName}',
    meta: {

    },
    component: () => import(/* webpackChunkName: "${modulename}" */ '@/views/${modulename}/index')
  }
]`
  }
]

// 添加到 components.json
const moduleFile = require('../src/module.json')
if (moduleFile[modulename]) {
  spinner.fail(chalk.red(`模块 ${chalk.bold.red(modulename)} 已存在.`))
  process.exit(0)
}

// 添加到 module.json
moduleFile[modulename] = {
  router: `./router/modules/${modulename}.js`,
  views: `./views/${modulename}/index.vue`,
  cerateTime: +new Date()
}
fileSave(path.join(ModulePath, 'module.json'))
  .write(JSON.stringify(moduleFile, null, '  '), 'utf8')
  .end('\n')

Files.forEach(async (file) => {
  // console.log(ModulePath)
  // console.log(file.filename)
  // console.log(path.join(ModulePath, file.filename))
  await fileSave(path.join(ModulePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})
spinner.succeed(chalk.green(`创建模块 ${chalk.bold.greenBright(chineseName)} 成功!`))
