import {Mongo} from 'meteor/mongo';

// Coleção que guarda todos os logs gerados pelos usuários
export const Logs = new Mongo.Collection('logs');
