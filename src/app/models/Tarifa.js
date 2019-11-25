const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Tarifa extends Model {
  static init(sequelize) {
    super.init(
      {
        origem: Sequelize.INTEGER,
        destino: Sequelize.INTEGER,
        valor: Sequelize.DECIMAL(10, 2)
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Tarifa;
