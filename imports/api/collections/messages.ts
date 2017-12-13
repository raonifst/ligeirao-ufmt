import { Mongo } from 'meteor/mongo';

// Coleção que armazena todas as mensagens pré-definidas, utilizadas pelos usuários para a
// construção dos logs
const messages = new Mongo.Collection('messages');

export default messages;

