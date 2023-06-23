/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

// importação de funções
const express = require('express');
const router = express.Router();
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
/* rota GET produtos*/
router.get('/', clienteController.findAll);
/* rota POST produtos*/
router.post('/', nomeMiddleware.validateName, descricaoMiddleware.validateDescricao,
    precoMiddleware.validatePreco, clienteController.save);
/* rota PUT produtos*/
router.put('/', clienteController.update);
/* rota DELETE produtos*/
router.delete('/:id', clienteController.remove);

// Exportação das rotas produtos
module.exports = router;
