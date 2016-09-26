// Do all maths operations here
import Array from '../model/array'
import co from 'co'

export const initArray = function (size) {
  return new Array(size)
}

export const update = co.wrap(function (array, x, y, z, value) {
  try {
    array[x][y][z] = value
    return array
  } catch (e) {
    console.log(e)
    return false
  }

})

export const query = co.wrap(function (array, startAt, endAt) {
  let startArray = startAt.split(',')
  let endArray = endAt.split(',')
  let sum = 0
  for(var t=startArray[2]; t<endArray[2]; t++) {
    for(var x=startArray[1]; x<endArray[1]; x++) {
      for(var i=startArray[0]; i<endArray[0]; i++) {
        sum += parseInt(array[t][x][i])
      }
    }
  }
  return sum
})
