import { Meteor } from 'meteor/meteor';

import { allLoginServices } from '../imports/api/objects/oauth-data';

declare const ServiceConfiguration: any;

Meteor.startup(() => {

  // Itera o JSON de serviços e adiciona cada um deles no banco de dados
  // para correta autenticação
  for (let service in allLoginServices) {
    if (allLoginServices.hasOwnProperty(service)) {
      ServiceConfiguration.configurations.upsert({
        service: service
      }, {
        $set: allLoginServices[service],
      });
    }
  }
  console.log('ServiceConfiguration inicializado.');

});
