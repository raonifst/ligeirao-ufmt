import {Immutable} from "./immutable";

/**
 * Representa um ponto de parada do ônibus. Esta informação deve conter um índice (utilizado
 * para futuras referências) e uma breve descrição do local (por exemplo, "biblioteca central",
 * "ponto em frente ao RU", "ginásio esportivo", "blocos didáticos 1 e 2" etc.).
 */
export class BusStop extends Immutable {

  /**
   * Instancia um novo ponto de parada do Ligeirão.
   *
   * @param {number} index  índice do objeto ponto de parada
   * @param {string} name   breve descrição do local situado o ponto de ônibus
   */
  constructor(index: number, name: string) {
    super(index, name);
  }

}
