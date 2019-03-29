const loadMachineID = require("./loadId");
const generateMachineID = require("./generateId");
const deleteMachineID = require("./deleteId");

module.exports = {
  load: loadMachineID,
  generate: generateMachineID,
  delete: deleteMachineID
};
