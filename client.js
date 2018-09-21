import auth from '@feathersjs/authentication-client';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';

const apiClient = feathers();
const restClient = rest();
apiClient.configure(restClient.fetch(window.fetch));
apiClient.configure(auth());


apiClient.service('/messages').find(null);
// ^^^ this breaks
