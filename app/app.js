// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// .hide unatharized view

const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
// const gameEvents = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signed_in_user').hide()
  // $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#settings').on('click', authUi.openSettings)
  $('#exit-settings').on('click', authUi.closeSettings)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // $('#new-post').on('click', gameEvents.onNewGame)
})
