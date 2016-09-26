// API server
import bot from './view/bot'

bot.spawn({
  token: process.env.slacktoken
}).startRTM((err)=>{
  if(err) throw new Error(err)
})
