"use strict";
const axios = require("axios");
const { remoteServer } = require("../config");

class Connection {
  constructor() {
    this.http = axios.create({
      baseURL: remoteServer
    });
  }

  async registerMachine(machineInfo) {
    return new Promise((res, rej) => {
      this.http
        .post("/", machineInfo)
        .then(({ data }) => {
          res(data);
        })
        .catch(e => rej(e));
    });
  }

  async checkMachineStatus(uuid) {
    return new Promise((res, rej) => {
      this.http
        .get(`/?uuid=${uuid}`)
        .then(({ data: { privateKey, passphrase } }) => {
          res({ privateKey, passphrase });
        })
        .catch(e => rej(e));
    });
  }
}

module.exports = Connection;
