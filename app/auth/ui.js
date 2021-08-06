'use strict'

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('div.new_user').hide()
  $('#message').text('Thank you for signing up for FIZZY!')
}
const signUpFailure = function (data) {
  $('#message').text('Oops! Something went wrong. Please, try again.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Welcome to FIZZY ')
  $('div.new_user').hide()
  $('div.returning_user').hide()
  $('#signed_in_user').show()
  $('#new-game').show()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#message').text('Oops! Something went wrong. Please, try again.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
