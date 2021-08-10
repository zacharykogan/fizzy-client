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

const allReviews = function (event) {
  console.log('this button works')
  event.preventDefault()
  const data = store.user.data
  api
    .getAllReviews(data)
    .then(function (payload) {
      ui.showAllSuccess(payload.reviews, false)
    })
    .catch(new Error());
}

const myReviews = function (event) {
  console.log('My Reviews Button')
  event.preventDefault()
  const data = store.user.data
  api.getMyReviews(data)
    .then(function (payload) {
      ui.showAllSuccess(payload.reviews, true)
    })
    .catch(new Error())
}

module.exports = {
  onPostReview,
  allReviews,
  myReviews
}

// //
//  Mon Aug 09 2021 10:56:19 GMT-0400 (Eastern Daylight Time)
// POST /reviews
// body {"name":{"name":"beer"},"type":"it was great","review":{"review":"ahdfhasoidhferb"},"rating":{"rating":"1"}}

// POST /reviews
// body {"review":{"name":"Joe's Apple Cider Vinegar Seltzer","type":"Seltzer","review":"Delicious! The best drink ever.","rating":5}}

// POST /reviews
// body {"name":"BEER 1","type":"Beer","review":"irhga;oihg","rating":"5"}
