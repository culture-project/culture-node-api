'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const argon2 = require('argon2');
const Database = use('Database')
const Usuario = use('App/Models/Usuario');

class UsuarioController {
  
  async index () {
    const users = await Usuario.all();
    
    return users;
  }
 
  async userById({request}){
    const id = request.params.id;
    let user = await Usuario.findBy('codUsuario', id);

    return {user};
  }

  async store ({ request }) {
    let data = request.body;
    data.senhaUsuario = await argon2.hash(data.senhaUsuario);
    const user = await Usuario.create(data);


    return user;
  }
  
  async login ({ request }){
    let data = request.body;

    let usuario =  await Database.table('tbusuario').where('emailusuario', data.emailUsuario).first();

    let senhaUsuario = data.senhaUsuario.toString();
    let senhaUsuarioHash = usuario.senhaUsuario.toString();

    let isSame = await argon2.verify(senhaUsuarioHash, senhaUsuario);

    return senhaUsuarioHash;

  }

  async show ({ params, request, response, view }) {
  }
  
  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = UsuarioController
