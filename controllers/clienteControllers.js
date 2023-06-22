/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const clienteModel = require('../services/clienteModel');

const findAll = async (request, response) => {
  const clientes = await clienteModel.findAll();
  return response.status(200).json(clientes);
};
const save = async (request, response) => {
  const result = await clienteModel.save(request.body);
  return result ?
    response.status(200).json({'Resposta:': 'Inserido com sucesso'}) :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao salvar cliente' });
};

const update = async (request, response) => {
  const result = await clienteModel.update(request.body);
  return result ?
    response.status(200).json({'Resposta:': 'Atualizado com sucesso'}) :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao atualizar cliente' });
};

const remove = async (request, response) => {
  const { id } = request.params;
  const result = await clienteModel.remove(id);
  return result ?
    response.status(200).json({'Resposta:': 'Removido com sucesso'}) :
    response.status(400).json({ '[ERROR/SERVER]': 'Falha ao remover cliente' });
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};
