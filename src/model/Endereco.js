const { Schema, model } = require('mongoose')

const EnderecoSchema = new Schema({
    cep: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    rua: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    complemento: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },

}, {
        timestamps: true,
    })

module.exports = model('Endereco', EnderecoSchema)