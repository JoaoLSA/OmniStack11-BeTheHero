
const connection = require('../database/connections')
const crypto = require('crypto')

module.exports = {
    async create(request, response)
    {
        const {name, email, whatsapp, city, uf} = request.body

        const id = crypto.randomBytes(4).toString('HEX') // criar id encriptado
       
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json('id:'+ id)
    },

    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    /*
    async delete (request, response)
    {
        const {id} = request.params

        const incidents = await connection('ongs')
            .where('id', id)
            .first();
            
            if (!incidents) 
                return response.status (401).json( {error: 'operation not permited'} );        

            await connection('ongs').where('id', id).delete()

            return response.status(204).send()

    },*/

}