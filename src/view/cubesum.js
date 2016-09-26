import * as math from '../controller/math'

export const presentInit = function(response, convo) {
  // convo.on('end', function(convo) {
  //   if (convo.status=='completed') {
  //     var res = convo.extractResponses()
  //     convo.say('Saved')
  //     console.log(res)
  //   }
  // })
  convo.ask('Please enter the size of the array', (response, convo) => {
    convo.say('Awesome')
    initArray(response, convo)
    convo.next()
  })
}

const initArray = function(response, convo){
  math.initArray(response)
  // convo.ask('Please enter operation: UPDATE or QUERY', (response, convo) => {
  //   convo.say('Goodbye')
  // })
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
