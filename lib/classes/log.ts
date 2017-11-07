import {BusStop} from "./busstop";
import {Message} from "./message";

declare const Logs: any; // TODO testar referências às coleções de dentro de arquivos TS

/**
 * Representa um registro de log na tabela (coleção) de logs, informando data e local onde foi
 * visto o ônibus.
 * Cada Log deve ser composto de local (ponto de parada) e data de registro, além de uma
 * mensagem pré-definida de status e o usuário a realizar o registro.
 */
export class Log {

  date: Date;       // Data do registro

  local: BusStop;   // Local do registro (ponto de parada)

  status: Message;  // Mensagem de status do registro

  // TODO alterar este campo para a classe de usuários
  user: any;        // Usuário criador do registro

  /**
   * Instancia um novo log.
   *
   * @param {BusStop} local   local do registro
   * @param {Message} status  mensagem de status associada ao registro
   */
  constructor(local: BusStop, status: Message) {
    this.date = new Date(); // TODO alterar o fuso horário das datas adicionadas ao objeto
    this.local = local;
    this.status = status;
    //this.user = Meteor.userId(); // TODO corrigir erro de importação de módulo Meteor em TS
  }

  getDate() {
    return this.date;
  }

  getLocal() {
    return this.local;
  }

  getStatus() {
    return this.status;
  }

  getUser() {
    return this.user;
  }

}
