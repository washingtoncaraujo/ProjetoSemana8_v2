/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

// importação de funções
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/produtoControllers');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* rota GET produtos*/
router.get('/', clienteController.findAll);
/* rota POST produtos*/
router.post('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge, clienteController.save);
/* rota PUT produtos*/
router.put('/', nomeMiddleware.validateName,
    sobrenomeMiddleware.validateFamilyName,
    idadeMiddleware.validateAge, clienteController.update);
/* rota DELETE produtos*/
router.delete('/:id', clienteController.remove);

// Exportação das rotas produtos
module.exports = router;
