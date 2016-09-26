// Do all maths operations here
import Array from '../model/array'
import co from 'co'

export const initArray = function (size) {
  return new Array(size)
}

export const update = co.wrap(function (array, x, y, z, value) {
  try {
    let firstValue = sum(array,x,y,z)- sum(array,x-1,y,z)
                      - sum(array,x,y-1,z) + sum(array,x-1,y-1,z)
    let secondValue = sum(array,x,y,z-1) - sum(array,x-1,y,z-1)
                      - sum(array,x,y-1,z-1)  + sum(array,x-1,y-1,z-1)
    let result = updateArray(array, array.length,x,y,z,value -(firstValue - secondValue ))
    return result
  } catch (e) {
    return false
  }

})



const sum = function (array, x, y, z) {
  let temp_y, temp_x, sum = 0
  while(z>0) {
    temp_x=x
    while(temp_x>0){
      temp_y=y
      while(temp_y > 0) {
        sum += array[temp_x][temp_y][z]
        temp_y -= (temp_y & -temp_y)
      }
      temp_x -= (temp_x & -temp_x)
    }
    z -= (z & -z)
  }
  return sum
}

const updateArray = function (array,n,x,y,z,val) {
  let temp_y, temp_x, returnArr = array

  while(z <= n) {
    temp_x = x
    while(temp_x <= n) {
      temp_y= y
      while(temp_y <= n) {
        returnArr[temp_x][temp_y][z] += val
        temp_y += (temp_y & -temp_y )
      }
      temp_x += (temp_x & -temp_x)
    }
    z += (z & -z)
  }
  return returnArr

}
