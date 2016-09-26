import * as math from '../controller/math'
import * as user from '../controller/user'

export const presentInit = function(response, convo) {
  // convo.on('end', function(convo) {
  //   if (convo.status=='completed') {
  //     var res = convo.extractResponses()
  //     convo.say('Saved')
  //     console.log(res)
  //   }
  // })
  convo.ask('Starting Cube Summation Script. Write OK to start!', (response, convo) => {
    user.getArray(response.user).then((result)=> {
      if (!result) {
        convo.say('Looks like there is no arrays to work with. Let me create one for you!')
        initArray(response, convo)
      } else {
        convo.say('We got your array!')
        askOperation(response, convo)
      }
    })
    convo.next()
  })
}

const initArray = function(response, convo){
  convo.ask('What would you like the size of the array to be?', (response, convo) => {
    console.log(response)
    user.createArray(response.user, response.text)
        .then((result) => {
          console.log(result)
          convo.say('Got that. Array has been initialized!')
          askOperation(response, convo)
        })
    convo.next()
  })
}


const askOperation = function(response, convo) {
  convo.say('What would you like to do?')
  convo.next()
}





// Example conversation
/*

 Size of array
UPDATE OR QUERY

if UPDATE
Enter postion seperated by comma of x,y,z
Enter value
Respond Success

if QUERY
Enter start position
Enter end position
Calculate and Respond




*/
