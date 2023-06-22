/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const connection = require('../configs/dbConfigurations');
const findAll = async () => {
  const produtos = await (await connection)
      .execute('SELECT * FROM produtos');
  return produtos[0];
};
const update = async (produtos) => {
  const query = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atual = ? WHERE id = ?';
  const isOk = await (await connection).execute(query,
      [produtos.nome, produtos.descricao, produtos.preco, produtos.data_atual,
        produtos.id]);
  return isOk[0].affectedRows === 1;
};

const save = async (produtos) => {
  const query = 'INSERT INTO produtos(nome, descricao, preco, data_atual) VALUES (?, ?, ?, ?)';
  const isOk = await (await connection).execute(query,
      [produtos.nome, produtos.descricao, produtos.preco,
        produtos.data_atual]);
  return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
  const query = 'DELETE FROM produtos WHERE id = ?';
  const isOk = await (await connection).execute(query, [id]);
  return isOk[0].affectedRows === 1;
};
module.exports = {
  findAll,
  save,
  remove,
  update,
};
