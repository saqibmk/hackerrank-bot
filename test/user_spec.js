import assert from 'assert'
import * as user from '../src/controller/user'
import Storage from 'node-persist'

require('co-mocha')

const fakeUser = '1234'

describe('User information controller', () => {
  beforeEach(function * () {
    yield Storage.init()
    yield Storage.clear()
  })
  it('Should check for existing array', function * () {
    let result = yield user.checkArray(fakeUser)
    assert.equal(result, false)
  })
  it('Should create user array', function * () {
    let result = yield user.createArray(fakeUser, 5)
    let exists = yield user.checkArray(fakeUser)
    assert.equal(result, true)
    assert.equal(exists, true)
  })
  it('Should get user array', function * () {
    yield user.createArray(fakeUser, 5)
    let result = yield user.getArray(fakeUser)
    assert.equal(typeof(result), 'object')
    assert.notEqual(result, false)
  })

  it('Should clear user array', function * () {
    yield user.createArray(fakeUser, 5)
    let result = yield user.clearArray(fakeUser)
    assert.equal(result, true)
  })

})
