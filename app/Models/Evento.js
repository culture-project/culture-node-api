'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evento extends Model {
    static get table () {
        return 'tbevento'
    }
    static get deleteTimestamp () {
        return null
    }
    static get createdAtColumn () {
        return null
    }
    
    static get updatedAtColumn () {
        return null
    }
}

module.exports = Evento
