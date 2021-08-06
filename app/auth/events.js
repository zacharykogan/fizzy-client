'use strict'

const getFormfields = require('./../../lib/get-form-fields')
// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}
