'use strict'
const db = use('Database');

class TesteController {

    async index() {
        return db.from('evento')
    }
}

module.exports = TesteController
