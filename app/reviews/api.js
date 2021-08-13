'use strict'

const config = require('../config')
const store = require('../store')
// const ui = require('./ui')

const postReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

const getAllReviews = function () {
  return $.ajax({
    url: config.apiUrl + '/reviews/all',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const getMyReviews = function () {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const deleteReview = function (id) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + id,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const editReview = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}
module.exports = {
  postReview,
  getAllReviews,
  getMyReviews,
  deleteReview,
  editReview
}
