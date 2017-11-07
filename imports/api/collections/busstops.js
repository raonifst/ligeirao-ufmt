import {Mongo} from 'meteor/mongo';

// Coleção que armazena todos os pontos de ônibus definidos do trajeto do ônibus
export const BusStops = new Mongo.Collection('bus-stops');
