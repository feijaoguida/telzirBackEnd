import Tarifa from "../models/Tarifa";

class SimulacaoController {
  async index(req, res) {
    function calculeFaleMais(plano, tempo, valor) {
      if (plano > tempo) {
        return 0;
      } else {
        let excedente = tempo - plano;
        return excedente * (valor * 1.1);
      }
    }

    function calculeSemFaleMais(tempo, valor) {
      return tempo * valor;
    }

    const plano = req.body.plano;
    const tempo = req.body.tempo;
    const origem = req.body.origem;
    const destino = req.body.destino;

    const idTarifa = await Tarifa.findOne({
      where: [{ origem }, { destino }]
    });

    if (!idTarifa) {
      return res.json({ Error: "Não existe plano para essas localidades" });
    }

    const { valor } = idTarifa;

    let comFaleMais = calculeFaleMais(plano, tempo, valor);
    let semFaleMais = calculeSemFaleMais(tempo, valor);

    return res.json({
      origem,
      destino,
      tempo,
      plano,
      comFaleMais,
      semFaleMais
    });
  }
}

export default new SimulacaoController();
