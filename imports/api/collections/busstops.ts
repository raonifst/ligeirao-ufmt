import { Mongo } from 'meteor/mongo';

// Coleção que armazena todos os pontos de ônibus definidos do trajeto do ônibus
const BusStops = new Mongo.Collection('bus-stops');

export default BusStops;
