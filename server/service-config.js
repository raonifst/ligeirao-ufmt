import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert({
    service: 'facebook'
  }, {
    $set: {
      // TODO remover appId e secret ao final do estágio de desenvolvimento
      // TODO atualizar novos appId e secret no aplicativo do Facebook
      appId: '150860088999367', // Temporary appId: will not work on future releases
      loginStyle: 'popup',
      secret: 'ff990ba95b321583de9396b1d04ed705' // Temporary appKey
    },
  });
  // TODO Julio, altere o clientId e o secret abaixo
  ServiceConfiguration.configurations.upsert({
    service: 'google'
  }, {
    $set: {
      // TODO remover clientId e secret ao final do estágio de desenvolvimento
      // TODO atualizar novos appId e secret no aplicativo do Google
      clientId: '', // Temporary appId: will not work on future
      // releases
      loginStyle: 'popup',
      secret: '' // Temporary appKey
    },
  });
  console.log('ServiceConfiguration inicializado.');
});
