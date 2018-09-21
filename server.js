import authentication from '@feathersjs/authentication';
import bodyParser from 'body-parser';
import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import http from 'http';
import jwt from '@feathersjs/authentication-jwt';
import memory from 'feathers-memory';
import rest from '@feathersjs/express/rest';

// Create an Express compatible Feathers application
const app = express(feathers());

app
  .configure(rest())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}));

app
  .use('/messages', memory())
  .configure(authentication({secret: 'mysecret'}));

app.get('/', async (req, res) => {
  res.set('Content-Type', 'text/html');
  const {accessToken} = await app.service('authentication').create({});
  const response = `
    <!DOCTYPE html>
    <html>
      <head>
        <script crossOrigin="true" type='text/javascript' src='http://0.0.0.0:8080/client.js'></script>
        <script type='text/javscript'>
          window.localStorage.setItem('feathers-jwt', '${accessToken}');
          console.log('hello world');
        </script>
      </head>
      <body>
      </body>
    </html>
  `;
  res.end(response);
});

const server = http.createServer(app);
server.listen('3000', () => {
  app.setup(server);
});
