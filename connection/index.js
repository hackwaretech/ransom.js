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
    try {
      const { data } = await this.http.post("/", machineInfo);
      return data;
    } catch (error) {
      return null;
    }
  }

  async checkMachineStatus(uuid) {
    try {
      const { data } = await this.http.get(`/?uuid=${uuid}`);
      return data;
    } catch (error) {
      return null;
    }
  }
}

module.exports = Connection;
