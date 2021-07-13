const { Schema, model } = require('mongoose')

const ClienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    telefone: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    enderecos: [{
        type: Schema.Types.ObjectId,
        ref: 'Endereco',
    }]
}, {
        timestamps: true,
    })

module.exports = model('Cliente', ClienteSchema)