const Cliente = require('../model/Cliente')
const Endereco = require('../model/Endereco')

module.exports = {

    async lista(req, res) {
        const todosClientes = await Cliente.find().populate("enderecos")
        return res.json(todosClientes)
    },

    async editar(req, res) {
        const { _id } = req.params
        const cliente = await Cliente.findById(_id).populate("enderecos")
        return res.json(cliente)
    },

    async salvarEdicao(req, res) {
        const { _id, nome, cpf, telefone, email } = req.body
        const { enderecos } = req.body

        enderecos.forEach(async (endereco) => {
            await Endereco.findOneAndUpdate({ _id: endereco._id }, endereco)
                .catch(err => {
                    return res.json({
                        erro: err.message
                    })
                })
        })

        const cliente = await Cliente.findOneAndUpdate({ _id }, {
            _id,
            nome,
            cpf,
            telefone,
            email,
            enderecos: enderecos.map(e => e._id)
        }).catch(err => {
            return res.json({
                erro: err.message
            })
        })
        return res.json(cliente)
    },

    async deletar(req, res) {
        const { _id } = req.params

        await Cliente.findOneAndRemove({ _id }).catch(err => {
            return res.json({
                erro: err.message
            })
        })
        return res.json({msg: "sucesso"})
    },

    async salvarNovo(req, res) {
        const { nome, cpf, telefone, email } = req.body
        const { enderecos } = req.body

        const enderecosDb = await Endereco.create(enderecos).catch(err => {
            return res.status(400).send({
                erro: err.message
            })
        })

        const cliente = await Cliente.create({
            nome,
            cpf,
            telefone,
            email,
            enderecos: enderecosDb ? enderecosDb.map(e => e._id) : []
        }).catch(err => {
            return res.status(400).send({
                erro: err.message
            })
        })

        return res.json(cliente)
    }
}