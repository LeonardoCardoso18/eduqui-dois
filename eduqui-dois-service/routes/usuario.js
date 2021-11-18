const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require ('../models/usuario')

router.post('/login', (req, res) => {
    Usuario.findOne({email: req.body.email})
    .then(u => {
        if(!u){
            return res.status(401).json({mensagem: "email inválido"})
        }
        return bcrypt.compare(req.body.password, u.password)
    })
    .then(result => {
        if(!result){
            return res.status(401).json({mensagem: "senha inválido"})
        }
    })
    
})


router.post('/cadastro', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash)
    const usuario = new Usuario ({
        email: req.body.email,
        password: req.body.password
    })
    usuario.save()
    res.end()
})

module.exports = router;