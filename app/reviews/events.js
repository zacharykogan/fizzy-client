'use strict'

const getFormfields = require('./../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onPostReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.postReview(data)
    .then(ui.postReviewSuccess)
    .catch(new Error())
}

const onEditReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.editReview(data, $(form).data('id'))
    .then(ui.editReviewSuccess)
    .catch(new Error())
}

const allReviews = function (event) {
  console.log('this button works')
  event.preventDefault()
  api.getAllReviews()
    .then(function (payload) {
      store.reviews = payload.reviews
      ui.showAllSuccess(false)
    })
    .catch(new Error())
}

const myReviews = function (event) {
  console.log('My Reviews Button')
  event.preventDefault()
  api.getMyReviews()
    .then(function (payload) {
      store.reviews = payload.reviews
      ui.showAllSuccess(true)
    })
    .catch(new Error())
}

module.exports = {
  onPostReview,
  allReviews,
  myReviews,
  onEditReview
}

// //
//  Mon Aug 09 2021 10:56:19 GMT-0400 (Eastern Daylight Time)
// POST /reviews
// body {"name":{"name":"beer"},"type":"it was great","review":{"review":"ahdfhasoidhferb"},"rating":{"rating":"1"}}

// POST /reviews
// body {"review":{"name":"Joe's Apple Cider Vinegar Seltzer","type":"Seltzer","review":"Delicious! The best drink ever.","rating":5}}

// POST /reviews
// body {"name":"BEER 1","type":"Beer","review":"irhga;oihg","rating":"5"}
