const { Router } = require("express");

const TarifaController = require("./app/controllers/TarifaController");
const SimulacaoController = require("./app/controllers/SimulacaoController");

const routes = new Router();

routes.get("/tarifas", TarifaController.index);
routes.post("/tarifas", TarifaController.store);

routes.post("/simulacao", SimulacaoController.index);

module.exports = routes;
