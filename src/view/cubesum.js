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
    user.checkArray(response.user).then((result)=> {
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
  convo.ask('What would you like to do? You can reply with UPDATE or QUERY or CLEAR', (response, convo) => {
    switch(response.text){
    case 'update':
      update(response, convo)
      break
    case 'query':
      query(response, convo)
      break
    case 'clear':
      clear(response, convo)
      break
    default:
      convo.say('Am I dumb or what? Did not compute!')
      convo.repeat()
    }
    convo.next()
  })
}

const update = function (response, convo) {
  convo.say('Getting ready to update')
  convo.ask('Enter the values using this format: x,y,z,value where value = value to be udapted', (response, convo)=>{
    let responseArray = response.text.split(',')
    user.getArray(response.user)
        .then((result) => {
          math.update(result,responseArray[0], responseArray[1], responseArray[2], responseArray[3])
              .then((updateResult)=> {
                user.saveArray(response.user,updateResult)
                    .then((saveResult) => {
                      if (saveResult) {
                        convo.say('Array Updated')
                        askOperation(response, convo)
                      }
                    })
              })
        })
    convo.next()
  })
}

const query = function (response, convo) {
  console.log(query)
}

const clear = function (response, convo) {
  user.clearArray(response.user)
      .then((result) => {
        if (result) convo.say('Array cleared. http://cdn.vanillaforums.com/mfp-en.vanillaforums.com/editor/wr/vqjp2ge4n1wv.jpg')
      })
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
