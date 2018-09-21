import auth from '@feathersjs/authentication-client';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';

const apiClient = feathers();
const restClient = rest();
apiClient.configure(restClient.fetch(window.fetch));
apiClient.configure(auth());

async function init() {
  try {
    const foo = await apiClient.authenticate({strategy: 'jwt'});
    const messages = await apiClient.service('/messages').find(null);
    console.log('messages are:', messages);
  } catch (e) {
    console.log(e);
  }
}

init();
