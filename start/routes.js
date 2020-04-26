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

Route.get('/teste', 'TesteController.index');


//Eventos
Route.group(() => {
  Route.get('', 'EventoController.index');
  Route.get('/recentes', 'EventoController.eventoRecente');
  Route.get('/pesquisa/:param', 'EventoController.eventoPesquisa');
  Route.get('/:id', 'EventoController.eventoById');
  Route.get('/:type/:param', 'EventoController.eventoBy');

  Route.post('', 'EventoController.store');
}).prefix('eventos');

//Usuario
Route.group(() => {
  Route.get('', 'UsuarioController.index');
  Route.get('/:id', 'UsuarioController.userById');

  Route.post('/login', 'UsuarioController.login');
  Route.post('', 'UsuarioController.store');
}).prefix('usuarios')

//Categoria
Route.group(() => {
  Route.get('' , 'CategoriaController.index');
  Route.get('/:id' , 'CategoriaController.show');

  Route.post('' , 'CategoriaController.store');
  Route.post('/edit/:id' , 'CategoriaController.update');

  Route.delete('/:id' , 'CategoriaController.destroy');
}).prefix('categorias')


//Classificacao
Route.group(() => {
  Route.get('', 'ClassificacaoIndicativaController.index');
  Route.get('/:id', 'ClassificacaoIndicativaController.getById');

  Route.post('/add', 'ClassificacaoIndicativaController.store');

  Route.put('/edit', 'ClassificacaoIndicativaController.update');;
}).prefix('classificacao');
