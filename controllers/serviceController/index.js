// CREATE
const addNewService = require('./addNewService');
// GET
const getAllServices = require('./getAllServices');
const getSingleService = require('./getSingleService');
// PATCH
const updateSingleService = require('./updateSingleService');
// DELETE
const deleteSingleService = require('./deleteSingleService');

module.exports = {
  addNewService,
  getAllServices,
  getSingleService,
  updateSingleService,
  deleteSingleService,
};
