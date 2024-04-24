const Usuario = require ('../models/usuarios')
exports.getAll = async (req, res) => {
    const usuario = await Usuario.findAll();
    res.json(usuario)
};

exports.getById = async (req, res) => {
    // No router id o que vem depois do usuario/
    const idDoParam = req.params.id;
    const usuarioEncontrado = await Usuario.findOne({ idUsuarios:idDoParam });
    res.json(usuarioEncontrado)
};

exports.createUsuario = async (req, res) => {
    const usuarioCadastro = await Usuario.findOne({ cpf: req.body.cpf });
    // Verificação de duplicidade de usuario cadastrado
    // if (usuarioCadastrado) {
    //     return res.send('Já existe um usuario cadastrado neste CPF.')
    // }

    const usuarioCriado = await Usuariocreate(req.body)
    console.log('usuarioCriado', usuarioCriado)
    return res.send("oi")
    // res.json(usuarios)
}