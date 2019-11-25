const Tarifa = require("../models/Tarifa");

class TarifaController {
  async index(req, res) {
    const tarifas = await Tarifa.findAll({ order: [["origem"]] }).map(
      tarifa => {
        return {
          id: tarifa.id,
          origem: tarifa.origem,
          destino: tarifa.destino,
          valor: tarifa.valor
        };
      }
    );

    return res.json(tarifas);
  }

  async store(req, res) {
    const { id, origem, destino, valor } = await Tarifa.create(req.body);

    return res.json({
      id,
      origem,
      destino,
      valor
    });
  }
}

module.exports = new TarifaController();
