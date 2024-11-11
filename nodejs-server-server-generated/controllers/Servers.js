'use strict';

var utils = require('../utils/writer.js');
var Servers = require('../service/ServersService');

module.exports.addServer = function addServer (req, res, next, body) {
  Servers.addServer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServer = function deleteServer (req, res, next, id) {
  Servers.deleteServer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findServerById = function findServerById (req, res, next, id) {
  Servers.findServerById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findServerByIdNumber = function findServerByIdNumber (req, res, next, id) {
  Servers.findServerByIdNumber(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findServers = function findServers (req, res, next, tableId, limit) {
  Servers.findServers(tableId, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
