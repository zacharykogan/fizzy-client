let apiUrl
const apiUrls = {
  production: 'https://serene-island-72536.herokuapp.com ',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
