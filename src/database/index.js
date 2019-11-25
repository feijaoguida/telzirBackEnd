const Sequelize = require("sequelize");

const Tarifa = require("../app/models/Tarifa");

const databaseConfig = require("../config/database");

const models = [Tarifa];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
