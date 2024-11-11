'use strict';


/**
 * Creates a new menu item in the menu
 *
 * body MenuItem MenuItem to add to the menu
 * returns MenuItem
 **/
exports.addMenuItem = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 6,
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "type" : "Entrada"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * deletes a single menu item based on the ID supplied
 *
 * id Long ID of menu item to delete
 * no response value expected for this operation
 **/
exports.deleteMenuItem = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns all menu items  
 *
 * type MenuItemType type to filter by (optional)
 * limit Integer maximum number of results to return (optional)
 * returns List
 **/
exports.findMenuItem = function(type,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 6,
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "type" : "Entrada"
}, {
  "price" : 6,
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "type" : "Entrada"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a menu item based on a single ID
 *
 * id Long ID of menu item to fetch
 * returns MenuItem
 **/
exports.findMenuItemById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 6,
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "type" : "Entrada"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a menu item updated
 *
 * body MenuItem MenuItem to add to the menu
 * id Long ID of menu item to fetch
 * returns MenuItem
 **/
exports.updateMenuItemById = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 6,
  "name" : "name",
  "description" : "description",
  "id" : 0,
  "type" : "Entrada"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

