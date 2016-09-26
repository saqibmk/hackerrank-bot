// API server
import bot from './view/bot'

bot.spawn({
  token: 'process.env.slackbot_token'
}).startRTM((err)=>{
  if(err) throw new Error(err)
})
