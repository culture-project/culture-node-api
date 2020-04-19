'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Evento = use('App/Models/Evento');
const Usuario = use('App/Models/Usuario');

class EventoController {

  async index ({ request, response, view }) {
    const events = Evento.all();
    
    return events;
  }

  async eventoById({request}){
    const id = request.params.id;
    const events = Evento.findByOrFail('codEvento', id);
    
    return events;
  }

  async eventoBy({request}){
    const type = request.params.type;
    const param = decodeURI(request.params.param);

    const events = Evento.query().where(type, 'like', param).fetch()

    return events;
  }
  
  async store ({ request, response }) {

  }

  async show ({ params, request, response, view }) {

  }

  async update ({ params, request, response }) {

  }


  async destroy ({ params, request, response }) {

  }

}

module.exports = EventoController
