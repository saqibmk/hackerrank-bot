import Botkit from 'botkit'
import * as cubeSum from './cubesum'
var bot = Botkit.slackbot()

bot.hears(['hello','hi'],['direct_message','direct_mention','mention'],function(bot,message) {
  bot.reply(message,'Hello.')
})

bot.hears(['Cube summation'], ['direct_message'], function (bot, message) {
  bot.startConversation(message, cubeSum.presentInit)
})

export default bot
