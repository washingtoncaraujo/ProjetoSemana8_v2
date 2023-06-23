/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */

// Executa a validação da data
const validatePreco = (request, response, next) => {
    const { body } = request;
    if (body.validatePreco == undefined || body.validatePreco === '') {
        return response.status(400)
            .json({ message: 'O campo "validatePreco" é obrigatório' });
    }
    if (isNaN(parseFloat(body.validatePreco)) || parseFloat(body.validatePreco) < 0) {
        return response.status(400)
            .json({ message: 'O campo "validatePreco" deve ser inteiro positivo e valor possível' });
    }
    next();
};
// Exporta a função de validação de data
module.exports = { validatePreco };
