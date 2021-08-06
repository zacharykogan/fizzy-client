'use strict'

const getFormfields = require('./../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signIn(data)
    .then(function (data) {
      store.user = data.user
      ui.signInSuccess()
      console.log(data)
    })
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
