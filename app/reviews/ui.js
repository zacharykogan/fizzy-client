// constdocument = require('./../../index.html')
const store = require('./../store')

const openReviews = function () {
  $('#reviews').show()
  $('#settings').hide()
  $('#post-review').hide()
  $('#sign-out').hide()
  $('#close-review').show()
  $('#showallreviews').hide()
  $('#message').text('HOW WAS YOUR DRINK?')
}

const closeReviews = function () {
  $('#reviews').hide()
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

const showAllSuccess = function (payload) {
  console.log(payload)

  let currentRow = $('<div class="row"></div>')
  let i = 0
  for (i = 0; i < payload.reviews.length; i++) {
    const review = payload.reviews[i]

    const colElement = $('<div class="col-4"></div>')
    const cardElement = $('<div class="card"></div');
    const cardBody = $('<div class="card-body"></div');
    const cardTitle = $('<h5 class="card-title"></h5>').html(review.name)
    const cardText = $('<p class="card-text"></p>').html(review.review)
    cardBody.append(cardTitle)
    cardBody.append(cardText)
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
  showAllSuccess
}
