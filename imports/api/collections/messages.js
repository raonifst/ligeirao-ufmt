import {Mongo} from 'meteor/mongo';

// Coleção que armazena todas as mensagens pré-definidas, utilizadas pelos usuários para a
// construção dos logs
export const Messages = new Mongo.Collection('messages');
