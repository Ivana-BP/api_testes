const { users, getNextId } = require("../models/userModel");

// POST /users
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      error: "O campo 'name' é obrigatório."
    });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      error: "O campo 'email' é obrigatório."
    });
  }

  const newUser = {
    id: getNextId(),
    name: name.trim(),
    email: email.trim()
  };

  users.push(newUser);

  return res.status(201).json({
    data: newUser
  });
};

// GET /users
const getUsers = (req, res) => {
  return res.status(200).json({
    data: users
  });
};

// GET /users/:id
const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuário não encontrado"
    });
  }

  return res.status(200).json({
    data: user
  });
};

// PUT /users/:id
const updateUser = (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado"
    });
  }

  const { name, email } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      error: "O campo 'name' é obrigatório."
    });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      error: "O campo 'email' é obrigatório."
    });
  }

  users[userIndex] = {
    id: users[userIndex].id,
    name: name.trim(),
    email: email.trim()
  };

  return res.status(200).json({
    data: users[userIndex]
  });
};

// DELETE /users/:id
const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado"
    });
  }

  users.splice(userIndex, 1);

  return res.status(204).send();
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};