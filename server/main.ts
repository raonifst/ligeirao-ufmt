import { Meteor } from 'meteor/meteor';
import Logs from "../imports/api/collections/logs";
import {Log} from "../lib/classes/log";

Meteor.startup(() => {
  // TODO remover esta seção de testes ao final do experimento
  Logs.insert(new Log(null, null));
  console.log('ts: Server OK!');
  console.log(Logs.find().fetch());
});
