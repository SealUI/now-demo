'use strict'
/* eslint-disable */
process.on('exit', () => {
  console.log()
})

const path = require('path')
const fileSave = require('file-save')
const ora = require('ora')
const chalk = require('chalk')
var request = require('request')
const ModulePath = path.resolve(__dirname, '../public')

let _emojiData = []

const spinner = ora(`获取emoji列表...`).start()
const requestData = () => {
  return new Promise((resolve, reject) => {
    request('https://raw.githubusercontent.com/github/gemoji/master/db/Category-Emoji.json', function (error, response, body) {
      resolve(JSON.parse(body))
    })
  })
}
const getEmojiData = async () => {
  let data = await requestData()
  if (data) {
    for (let item of data.EmojiDataArray) {
      _emojiData.push({
        category: item.CVDataTitle.split('-')[1],
        list: item.CVCategoryData.Data.split(',')
      })
    }
  }
  fileSave(path.join(ModulePath, 'emoji.json'))
    .write(JSON.stringify(_emojiData), 'utf8')
    .end('\n')
  spinner.succeed(chalk.green(`获取emoji列表成功!`))
}

getEmojiData()
