// constdocument = require('./../../index.html')
const store = require('./../store')
const api = require('./api')
// const reviewsEvents = require('./events.js')

const openReviews = function () {
  $('#reviews').show()
  $('#settings').hide()
  $('#post-review').hide()
  $('#sign-out').hide()
  $('#close-review').show()
  $('#showallreviews').hide()
  $('#message').text('HOW WAS YOUR DRINK?')
  $('#allReviews').html('')
  $('#showallreviews').hide()
  $('#showmyreviews').hide()
  $('#editreviews').hide()
}

const closeReviews = function () {
  $('#reviews').hide()
  $("#editreviews").hide()
  $('#settings').show()
  $('#sign-out').show()
  $('#post-review').show()
  $('#showallreviews').show()
  $('#message').text('')
}

const postReviewSuccess = function () {
  closeReviews()
  $('#message').text('Thank your for submitting your review!')
}

const editReviewSuccess = function () {
  closeReviews()
  $('#message').text('Review has been updated!')
}

const findReviewIndex = function (reviewId) {
  for (let i = 0; i < store.reviews.length; i++) {
    if (store.reviews[i]._id === reviewId) {
      return i
    }
  }
}

const onDeleteReview = function (event) {
  const reviewId = $(event.target).data('id')
  api.deleteReview(reviewId)
    .then(function () {
      store.reviews.splice(findReviewIndex(reviewId), 1)
      showAllSuccess(true)
      $('#message').text('Review deleted')
    })
}

const onEditReview = function (event) {
  const reviewId = $(event.target).data('id')
  const review = store.reviews[findReviewIndex(reviewId)]
  console.log(review)
  $('#editreviews').show()
  $('#settings').hide()
  $('#post-review').hide()
  $('#sign-out').hide()
  $('#close-review').show()
  $('#showallreviews').hide()
  $('#editreviewform').find('input[name="review[name]"]').val(review.name)
  $('#editreviewform').find('input[name="review[review]"]').val(review.review)
  $('#editreviewform').find('input[name="review[rating]"]').val(review.rating)
  $('#editreviewform').data('id', reviewId)
}

const showAllSuccess = function (showButtons) {
  $('#allReviews').html('')

  let currentRow = $('<div class="row"></div>')
  let i = 0
  for (i = 0; i < store.reviews.length; i++) {
    const review = store.reviews[i]

    const colElement = $('<div class="col-4"></div>')
    const cardElement = $('<div class="card"></div>')
    const cardBody = $('<div class="card-body"></div')
    const cardTitle = $('<h5 class="card-title"></h5>').html(review.name)
    const cardText = $('<p class="card-text"></p>').html(review.review + '<br/>Rating: ' + review.rating + '/5')

    cardBody.append(cardTitle)
    cardBody.append(cardText)
    if (showButtons) {
      const deleteButton = $('<button type="button" class="btn btn-outline-danger">Delete</button>').data('id', review._id).on('click', onDeleteReview)
      const editButton = $('<button type="button" class="btn btn-outline-primary">Edit</button>').data('id', review._id).on('click', onEditReview)
      cardBody.append(deleteButton)
      cardBody.append(editButton)
    }

    cardElement.append(cardBody)
    colElement.append(cardElement)
    currentRow.append(colElement)
    if ((i + 1) % 3 === 0) {
      $('#allReviews').append(currentRow)
      currentRow = $('<div class="row"></div>')
    }
  }
  if (i % 3 !== 0) {
    $('#allReviews').append(currentRow)
  }
}

module.exports = {
  openReviews,
  closeReviews,
  postReviewSuccess,
  editReviewSuccess,
  showAllSuccess
}
