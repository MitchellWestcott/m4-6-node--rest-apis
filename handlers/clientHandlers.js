const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");
// const { v4: uuidv4 } = require("uuid");

// write your handlers here...

const handleClients = (req, res) => {
  const data = clients;
  console.log(data);
  res.status(200).json({
    status: 200,
    data,
  });
};

const clientId = (req, res) => {
  const id = req.params.id;
  const client = clients.filter((client) => {
    return id === client.id;
  });
  if (client) {
    res.status(200).json({
      status: 200,
      client: client,
    });
  } else {
    res.status(400).json({
      status: 400,
      error: "Client not found...",
    });
  }
};

const addClient = (req, res) => {
  const data = req.body;
  const checkEmail = clients.some((client) => {
    return client.email === data.email;
  });

  if (checkEmail) {
    res.status(400).json({
      status: 400,
      error: "Client already exists...",
    });
  } else {
    const newId = uuidv4();
    data.id = newId;
    clients.push(data);
    res.status(201).json({
      status: 201,
      message: "Client successfully added.",
    });
  }
};

const deleteClient = (req, res) => {
  const id = req.params.id;
  let index = undefined;

  clients.forEach((client) => {
    if (id === client.id) {
      index = clients.indexOf(client);
    }
  });

  if (index >= 0) {
    clients.splice(index, 1);
    res.status(200).json({
      status: 200,
      message: "Client successfully deleted.",
    });
  } else {
    res.status(204).json({
      status: 204,
      error: "Nothing to delete...",
    });
  }
};

module.exports = {
  handleClients,
  clientId,
  addClient,
  deleteClient,
};
