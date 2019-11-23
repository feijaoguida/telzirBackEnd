import { Router } from "express";

import TarifaController from "./app/controllers/TarifaController";
import SimulacaoController from "./app/controllers/SimulacaoController";

const routes = new Router();

routes.get("/tarifas", TarifaController.index);
routes.post("/tarifas", TarifaController.store);

routes.post("/simulacao", SimulacaoController.index);

export default routes;
