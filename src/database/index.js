import Sequelize from "sequelize";

import Tarifa from "../app/models/Tarifa";

import databaseConfig from "../config/database";

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

export default new Database();
