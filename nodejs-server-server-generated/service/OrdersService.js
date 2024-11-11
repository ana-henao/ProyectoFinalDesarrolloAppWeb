'use strict';


/**
 * Creates a new order for table
 *
 * body Order Add order to table
 * returns Order
 **/
exports.addOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "total" : 6.027456183070403,
  "id" : 0,
  "tableNumber" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deletes a single order based on the ID supplied
 *
 * id Long ID of order to delete
 * no response value expected for this operation
 **/
exports.deleteOrder = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns a order based on a single ID
 *
 * id Long ID of order to fetch
 * returns Order
 **/
exports.findOrderById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "total" : 6.027456183070403,
  "id" : 0,
  "tableNumber" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all orders  
 *
 * tableId Integer table to filter by (optional)
 * limit Integer maximum number of results to return (optional)
 * returns List
 **/
exports.findOrders = function(tableId,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "date",
  "total" : 6.027456183070403,
  "id" : 0,
  "tableNumber" : 1
}, {
  "date" : "date",
  "total" : 6.027456183070403,
  "id" : 0,
  "tableNumber" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a order updated
 *
 * body Order Order to add to the menu
 * id Long ID of order to fetch
 * returns Order
 **/
exports.updateOrderById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "total" : 6.027456183070403,
  "id" : 0,
  "tableNumber" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

