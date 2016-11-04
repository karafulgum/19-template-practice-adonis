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

const Route = use('Route')

Route.get('/', function * (request, response) {
  yield response.sendView('form');
});

// Route.post('/form', function * (request, response) {
//   // Get an object of the request info for just "street", "city" and "zip"
//   const inputs = request.only('street', 'city', 'zip');
//
//   response.send(inputs);
// });
