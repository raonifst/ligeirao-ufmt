import { Mongo } from 'meteor/mongo';

// Coleção que guarda todos os logs gerados pelos usuários
const Logs = new Mongo.Collection('logs');

export default Logs;
