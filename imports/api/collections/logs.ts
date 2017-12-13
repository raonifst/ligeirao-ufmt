import { Mongo } from 'meteor/mongo';

// Coleção que guarda todos os logs gerados pelos usuários
const logs = new Mongo.Collection('logs');

export default logs;
