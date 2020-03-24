const connection = require('../database/connections')

module.exports = {
    async create (request, response){
        const {id} = request.body

        const ong = await connection('ongs')
        .where('id', id)
        .select('*')
        .first()

        if (!ong){
            return response.status(400).json({error: 'Id not exists'})
        }

        return response.json(ong)
    }
}