// Returns initial array model for use
// Initial Array has all values set to 0, as required by problem
// Recieves the size of the array as input

export default function (size) {
  let outMostArray = []
  for(var t=0; t<=size; t++) {
    let outerArray = []
    for(var x=0; x<=size; x++) {
      let innerArray = []
      for(var i=0; i<=size; i++) {
        innerArray[i] = 0
      }
      outerArray.push(innerArray)
    }
    outMostArray.push(outerArray)
  }
  return outMostArray
}
