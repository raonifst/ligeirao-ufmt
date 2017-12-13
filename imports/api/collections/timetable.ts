import { Mongo } from 'meteor/mongo';

// Coleção que guarda cada entrada da tabela de horários de circulação do Ligeirão
const timetable = new Mongo.Collection('timetable');

export default timetable;
