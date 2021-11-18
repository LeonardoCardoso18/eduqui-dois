const express = require('express');
const router = express.Router()
const multer = require('multer');
const Materia = require('../models/materias')

router.get('', (req, res, next) => {
    const materias = Materia.find(),
    
})
