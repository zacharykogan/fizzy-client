const openReviews = function () {
  $('#reviews').show()
  $('#settings').hide()
  $('#post-review').hide()
  $('#sign-out').hide()
  $('#close-review').show()
  $('#message').text('HOW WAS YOUR DRINK?')
}

const closeReviews = function () {
  $('#reviews').hide()
  $('#settings').show()
  $('#sign-out').show()
  $('#post-review').show()
  $('#message').text('')
}

const postReview = function () {
  closeReviews()
}
module.exports = {
  openReviews,
  closeReviews,
  postReview
}
