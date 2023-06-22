/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const produtoModel = require('../services/produtoModel');
const findAll = async (request, response) => {
  const produtos = await produtoModel.findAll();
  return response.status(200).json(produtos);
};
const save = async (request, response) => {
  const result = await produtoModel.save(request.body);
  return result ?
    response.status(200).json({'Resposta:': 'Inserido com sucesso'}) :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao salvar produto' });
};

const update = async (request, response) => {
  const result = await produtoModel.update(request.body);
  return result ?
    response.status(200).json({'Resposta:': 'Atualizado com sucesso'}) :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao atualizar produto' });
};

const remove = async (request, response) => {
  const { id } = request.params;
  const result = await produtoModel.remove(id);
  return result ?
    response.status(200).json({'Resposta:': 'Removido com sucesso'}) :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao remover produto' });
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};
