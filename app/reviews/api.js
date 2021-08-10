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

const getAllReviews = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews/all',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

const getMyReviews = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}
module.exports = {
  postReview,
  getAllReviews,
  getMyReviews
}
