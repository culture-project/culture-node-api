'use strict'
const db = use('Database');

class TesteController {

    async index() {
        return db.from('tbusuario')
    }
}

module.exports = TesteController
