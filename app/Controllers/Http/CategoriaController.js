'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Categoria = use('App/Models/Categoria');


class CategoriaController {
 
  async index ({ request, response, view }) {
    const categorias = await Categoria.all();

    return categorias;
  }

 
   
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.body;
    const categoria = await Categoria.create(data);

    return categoria;
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const id = request.params.id;
      const categoria = await Categoria.find(id);

      return categoria;
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
      const id =  request.params.id;
      const categoria = await Categoria.find(id);
      const data = request.only(["nomeCategoria"]);
      
      categoria.merge(data);
      await categoria.save();

      return categoria;
  }

  async destroy ({ params, request, response }) {
    const id = request.params.id;

    const categoria = await Categoria.find(id);
    await categoria.delete();

    return true;
  }
}

module.exports = CategoriaController
