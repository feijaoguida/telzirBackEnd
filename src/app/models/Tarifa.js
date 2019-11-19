import Sequelize, { Model } from "sequelize";

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

export default Tarifa;
