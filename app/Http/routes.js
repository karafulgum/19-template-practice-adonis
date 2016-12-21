'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');
const fetch = require('node-fetch');


Route.get('/', function * (request, response) {

  const apiUrl = yield fetch('http://json-data.herokuapp.com/forms');
  const formInputs = yield apiUrl.json();
  yield response.sendView('form', {formInputs});
});

Route.post('/', function * (request, response) {
  const inputs = request.except('_csrf');

  yield response.sendView('results', { inputs });
});
