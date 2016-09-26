import co from 'co'
import Storage from 'node-persist'
import * as math from './math'

export const checkArray = co.wrap(function * (userID) {
  try {
    yield Storage.init()
    let userArray = yield Storage.getItem(userID)
    if(userArray === undefined) throw new Error('Does not exist')
    return true
  } catch (e) {
    console.log(e)
    return false
  }
})

export const getArray = co.wrap(function * (userID) {
  try {
    yield Storage.init()
    let array = yield Storage.getItem(userID)
    return array
  } catch (e) {
    console.log(e)
    return false
  }
})

export const createArray = co.wrap(function * (userID, size) {
  try {
    yield Storage.init()
    let baseArray = math.initArray(size)
    // let arrayString = JSON.stringify(baseArray)
    console.log(userID)
    yield Storage.set(userID, baseArray)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
})

export const clearArray = co.wrap(function * (userID) {
  try {
    yield Storage.init()
    yield Storage.removeItem(userID)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
})
