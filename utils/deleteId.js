const { sysInfoPath } = require("../config");
const fs = require("fs");

const deleteMachineId = () => {
  fs.unlinkSync(sysInfoPath);
};

module.exports = deleteMachineId;
