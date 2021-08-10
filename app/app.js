// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// .hide unatharized view

const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const reviewsUi = require('./reviews/ui')
const reviewsEvents = require('./reviews/events')
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
  $('#reviews').hide()
  $('#post-review').on('click', reviewsUi.openReviews)
  $('#close-review').on('click', reviewsUi.closeReviews)
  $('#reviewform').on('submit', reviewsEvents.onPostReview)
  $('#showallreviews').on('click', reviewsEvents.allReviews)
  $('#showmyreviews').on('click', reviewsEvents.myReviews)
  $('#editreviews').hide()
  $('#editreviews').on('submit', reviewsEvents.onEditReview)
})
