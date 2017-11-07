import { Mongo } from 'meteor/mongo';

// Coleção que armazena todas as mensagens pré-definidas, utilizadas pelos usuários para a
// construção dos logs
const Messages = new Mongo.Collection('messages');

export default Messages;

