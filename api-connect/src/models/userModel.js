let users = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com"
  },
  {
    id: 2,
    name: "Maria Souza",
    email: "maria@email.com"
  }
];

let nextId = 3;

const getNextId = () => {
  return nextId++;
};

module.exports = {
  users,
  getNextId
};