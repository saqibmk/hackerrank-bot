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

export const query = co.wrap(function (array, startAt, endAt) {
  let startArray = startAt.split(',')
  let endArray = endAt.split(',')
  let x0 = startArray[0], y0 = startArray[1], z0 = startArray[2]
  let x = endArray[0], y = endArray[1], z = endArray[2]

  let firstValue = sum(array,x,y,z)- sum(array,x0-1,y,z)
                    - sum(array,x,y0-1,z) + sum(array,x0-1,y0-1,z)
  let secondValue = sum(array,x,y,z0-1) - sum(array,x0-1,y,z0-1)
                    - sum(array,x,y0-1,z0-1) + sum(array,x0-1,y0-1,z0-1)

  return (firstValue - secondValue)
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
