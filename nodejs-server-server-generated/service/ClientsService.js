'use strict';


/**
 * Creates a new client for table
 *
 * body Client Add client to table
 * returns Client
 **/
exports.addClient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deletes a single client based on the ID supplied
 *
 * id Long ID of order to delete
 * no response value expected for this operation
 **/
exports.deleteClient = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns a client based on a single ID
 *
 * id Long ID of client to fetch
 * returns Client
 **/
exports.findClientById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

