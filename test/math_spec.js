import assert from 'assert'
import * as math from '../src/controller/math'


require('co-mocha')

describe('Cube Summation Math Controller', () => {

  it('Should initialize an array of the proper size', () => {
    let newArray = math.initArray(5)
    assert.equal(newArray.length, 5)
  })

  it('Should update the array properly', function * () {
    let newArray = math.initArray(4)
    let updatedArray = yield math.update(newArray, 2, 2, 2, 10)
    assert.equal(updatedArray[2][2][2], 10)
  })

  it('Should get proper result from query', function * () {
    let newArray = math.initArray(4)
    let result = yield math.query(newArray, '1,1,1', '3,3,3')
    assert.equal(result, 0)
  })

  
})
