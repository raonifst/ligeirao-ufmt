import { Immutable } from './immutable';

/**
 * Representa um ponto de parada do ônibus. Esta informação deve conter um índice (utilizado
 * para futuras referências) e uma breve descrição do local (por exemplo, "biblioteca central",
 * "ponto em frente ao RU", "ginásio esportivo", "blocos didáticos 1 e 2" etc.).
 */
export class BusStop extends Immutable {

  private coordX: number;

  private coordY: number;

  private suffix: string = "px";

  /**
   * Instancia um novo ponto de parada do Ligeirão.
   *
   * @param {number} index  índice do objeto ponto de parada
   * @param {string} name   breve descrição do local situado o ponto de ônibus
   * @param {string} coordX coordenada em X
   * @param {string} coordY coordenada em Y
   */
  constructor(index: number, name: string, coordX: number, coordY: number) {
    super(index, name);
    this.coordX = coordX;
    this.coordY = coordY;
  }

  getDOMCoordX(): string {
    return this.coordX + this.suffix;
  }

  getDOMCoordY(): string {
    return this.coordY + this.suffix;
  }

}
