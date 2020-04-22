'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { culture:'tente acessar a documentação no site do culture.'}
});

Route.group(() => {
  Route.get('', 'EventoController.index');
  Route.get('/:id', 'EventoController.eventoById');
  Route.get('/:type/:param', 'EventoController.eventoBy');
  Route.get('/rec', 'EventoController.index');

  Route.post('', 'EventoController.store');
}).prefix('eventos')


Route.group(() => {
  Route.get('', 'UsuarioController.index');
  Route.get('/:id', 'UsuarioController.userById');

  Route.post('/login', 'UsuarioController.login');
  Route.post('', 'UsuarioController.store');
}).prefix('usuarios')
