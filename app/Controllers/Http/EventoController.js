'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Evento = use('App/Models/Evento');
const Database = use('Database')

class EventoController {

  async index ({ request, response, view }) {
    const events = await Evento.all();
    
    return events;
  }

  async eventoById({request, response}){
    const id = request.params.id;
    const event = await Evento.find(id);

    return event;
  }

  async eventoBy({request}){
    const type = request.params.type;
    const param = decodeURI(request.params.param);

    const events = await Evento.query().where(type, 'like', param).fetch()

    return events;
  }

  async eventoRecente({request}){
    const events = Evento.query().orderBy('dataInicioEvento', 'desc').fetch();

    return events;
  }
  
  async eventoPesquisa({request}){
    const data = request.params.param;

    const eventsName = await Database.table('evento').where('nomeEvento','like', '%'+data+'%');
    const eventsDesc = await Database.table('evento').where('descricaoEvento','like', '%'+data+'%');

    return {eventsName, eventsDesc};
  }

  async store ({ request, response }) {
    const data = request.body;
    const event = await Evento.create(data);
    return event;
  }

  async show ({ params, request, response, view }) {

  }

  async update ({ params, request, response }) {
    const data = request.body;
    const event = await Evento.find(data.id);
    event.merge(data);
    event.save();

    return event;

  }

  async destroy ({ params, request, response }) {
      const id = request.params.id;
      const event = await Evento.find(id);
      await event.delete();

      return true;
  }

  async aprove ({params, request, response}) {
    const data = request.body;
    const event = await Evento.find(data.id);
    event.isAprovado = true;
    event.merge(data);
    event.save();

    return event;
  }

  async desprove ({params, request, response}) {
    const data = request.body;
    const event = await Evento.find(data.id);
    event.isAprovado = false;
    event.merge(data);
    event.save();

    return event;
  }

}

module.exports = EventoController
