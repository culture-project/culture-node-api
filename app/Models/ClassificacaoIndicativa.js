'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClassificacaoIndicativa extends Model {
    static get table () {
        return 'classificacaoindicativa'
    }
}


module.exports = ClassificacaoIndicativa
