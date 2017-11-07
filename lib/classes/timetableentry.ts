export enum LigeiraoStatus {NoStops, PeriodicStops}

/**
 * Representa um registro ou uma linha da tabela de horários do Ligeirão.
 */
export class TimetableEntry {

  start: [number, number];  // Início do período (tupla de horas e minutos)

  end: [number, number];    // Fim do período (tupla de horas e minutos)

  info: LigeiraoStatus;     // Informação referente ao período (se não há paradas,
                            // se há paradas a cada 30 minutos etc.)

  /**
   * Instancia uma nova entrada na tabela de horários do Ligeirão
   *
   * @param {[number , number]} start   início do período
   * @param {[number , number]} end     fim do período
   * @param {boolean} hasPeriodicStops  se há ou não paradas periódicas
   */
  constructor(start: [number, number], end: [number, number], hasPeriodicStops: boolean) {
    this.start = start;
    this.end = end;
    this.info = (hasPeriodicStops) ? LigeiraoStatus.PeriodicStops : LigeiraoStatus.NoStops;
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }

  getInfo() {
    return this.info;
  }

}
