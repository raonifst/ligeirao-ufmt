import { Immutable } from './immutable';

/**
 * Representa uma mensagem pré-definida de status de um Log. Esta mensagem apresenta uma
 * informação relevante sobre o estado atual do Ligeirão em um dado local (exemplos de
 * mensagens poderiam ser "ônibus quebrado", "em circulação", "em circulação mas com problemas"
 * etc.).
 */
export class Message extends Immutable {

  /**
   * Instancia uma nova mensagem.
   *
   * @param {number} index  índice do objeto mensagem (utilizado para posterior referência)
   * @param {string} name   breve descrição do estado do ônibus (conforme exemplos apresentados)
   */
  constructor(index: number, name: string) {
    super(index, name);
  }

}
