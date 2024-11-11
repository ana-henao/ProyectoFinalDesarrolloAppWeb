'use strict';

var utils = require('../utils/writer.js');
var MenuItems = require('../service/MenuItemsService');

module.exports.addMenuItem = function addMenuItem (req, res, next, body) {
  MenuItems.addMenuItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMenuItem = function deleteMenuItem (req, res, next, id) {
  MenuItems.deleteMenuItem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findMenuItem = function findMenuItem (req, res, next, type, limit) {
  MenuItems.findMenuItem(type, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findMenuItemById = function findMenuItemById (req, res, next, id) {
  MenuItems.findMenuItemById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMenuItemById = function updateMenuItemById (req, res, next, body, id) {
  MenuItems.updateMenuItemById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
