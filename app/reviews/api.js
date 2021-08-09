'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui')

const postReview = function (data) {
  ui.postReviewSuccess()
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

module.exports = {
  postReview
}
