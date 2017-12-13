import { BusStop } from './busstop';

/**
 * Classe que representa a instância do ônibus do Ligeirão.
 * É representada como uma classe abstrata devido ao fato de existir apenas uma única
 * "instância" do Ligeirão. Assim, todos os seus métodos e atributos são estáticos.
 */
export abstract class Bus {

  static nextStop: BusStop = null;    // Próximo ponto de parada estimado

  static timeNextStop: Date = null;   // Data estimada do encontro ao próximo ponto de parada

  /**
   * Inicia a classe; configura o próximo ponto de parada do ônibus e a data estimada para
   * chegar a este ponto de parada.
   *
   * @param {BusStop} nextStop  o próximo ponto de parada
   * @param {Date} date         a data estimada para o ônibus chegar ao ponto
   */
  static init(nextStop: BusStop, date: Date) {
    Bus.nextStop = nextStop;
    Bus.timeNextStop = date;
  }

  /**
   * Modifica o próximo ponto de parada atual do Ligeirão
   *
   * @param {BusStop} nextStop o novo ponto de parada no qual o Ligeirão está prestes a visitar
   */
  static goTo(nextStop: BusStop) {
    // TODO implementar método Bus.goTo()
  }

  static getNextStop() {
    return Bus.nextStop;
  }

  static getNextStopDate() {
    return Bus.timeNextStop;
  }

}
