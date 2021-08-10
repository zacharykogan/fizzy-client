'use strict'

const signUpSuccess = function (data) {
  $('div.new_user').hide()
  $('#message').text('Thank you for signing up for FIZZY!')
}
const signUpFailure = function (data) {
  $('#message').text('Oops! Something went wrong. Please, try again.')
}

const signInSuccess = function (data) {
  $('#message').text('Welcome to FIZZY! ')
  $('div.new_user').hide()
  $('div.returning_user').hide()
  $('#signed_in_user').show()
  $('div.settings').hide()
}

const signInFailure = function (data) {
  $('#message').text('Oops! Something went wrong. Please, try again.')
}

const signOutSuccess = (data) => {
  $('#message').text('Goodbye!')
  $('div.new_user').show()
  $('#signed_in_user').show()
  $('div.returning_user').show()
  $('#signed_in_user').hide()
}

const openSettings = function () {
  $('#message').text('SETTINGS')
  $('div.settings').show()
  $('#post-review').hide()
  $('#settings').hide()
  $('#sign-out').hide()
  $('#showallreveiws').hide()
  $('#allReviews').html('')
  $('#showallreviews').hide()
  $('#showmyreviews').hide()
}
const closeSettings = function () {
  $('#message').text('')
  $('div.settings').hide()
  $('#post-review').show()
  $('#settings').show()
  $('#sign-out').show()
  $('#showallreviews').show()
  $('#showmyreviews').show()
}

const changePasswordSuccess = function () {
  closeSettings()
  $('#message').text('Password Updated')
}

const changePasswordFailure = function () {
  $('#message').text('Check your password and try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  openSettings,
  closeSettings,
  changePasswordSuccess,
  changePasswordFailure
}
