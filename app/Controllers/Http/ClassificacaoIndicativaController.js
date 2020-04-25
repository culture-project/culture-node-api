'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ClassificacaoIndicativa = use('App/Models/ClassificacaoIndicativa');

class ClassificacaoIndicativaController {
  async index ({ request, response, view }) {
    const classis = await ClassificacaoIndicativa.all();

    return classis;
  }

  async getById({request}) {
    const id = request.params.id;
    const classi = await ClassificacaoIndicativa.find(id);

    return classi
  }

  async store ({ request, response }) {
    const data = request.body;

    const classi = await ClassificacaoIndicativa.create(data);
    return classi;
  }

  async update ({ params, request, response }) {
    const data = request.body

    const classi = await ClassificacaoIndicativa.find(data.id);
    classi.merge(data);
    classi.save();

    return classi;
  }

  async destroy ({ params, request, response }) {

  }
}

module.exports = ClassificacaoIndicativaController
