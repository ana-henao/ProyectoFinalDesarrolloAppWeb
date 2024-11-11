'use strict';

var utils = require('../utils/writer.js');
var Clients = require('../service/ClientsService');

module.exports.addClient = function addClient (req, res, next, body) {
  Clients.addClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteClient = function deleteClient (req, res, next, id) {
  Clients.deleteClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findClientById = function findClientById (req, res, next, id) {
  Clients.findClientById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
