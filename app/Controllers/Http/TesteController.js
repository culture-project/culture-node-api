'use strict'
const db = use('Database');

class TesteController {

    async index() {
        return db.from('tbevento')
    }
}

module.exports = TesteController
