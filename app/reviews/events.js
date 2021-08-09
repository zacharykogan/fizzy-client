'use strict'

const getFormfields = require('./../../lib/get-form-fields')
// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onPostReview = function (event) {
  console.log('I AM HERE')
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.postReview(data)
    .then(ui.postReviewSuccess)
    .catch(new Error())
}

module.exports = {
  onPostReview
}
