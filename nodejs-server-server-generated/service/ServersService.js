'use strict';


/**
 * Creates a new server
 *
 * body Server Add server to restaurant
 * returns Server
 **/
exports.addServer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "identificationNumber" : "identificationNumber",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deletes a single server based on the IDNumber supplied
 *
 * id Long ID of server to delete
 * no response value expected for this operation
 **/
exports.deleteServer = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns a server based on a id
 *
 * id Long ID of order to fetch
 * returns Server
 **/
exports.findServerById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "identificationNumber" : "identificationNumber",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a server based on a id number
 *
 * id Long ID Number of server to fetch
 * returns Server
 **/
exports.findServerByIdNumber = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "identificationNumber" : "identificationNumber",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all servers  
 *
 * tableId Integer table to filter by (optional)
 * limit Integer maximum number of results to return (optional)
 * returns List
 **/
exports.findServers = function(tableId,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "identificationNumber" : "identificationNumber",
  "id" : 0
}, {
  "name" : "name",
  "identificationNumber" : "identificationNumber",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

