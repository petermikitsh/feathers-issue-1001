import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import http from 'http';

// Create an Express compatible Feathers application
const app = express(feathers());

app.get('/', async (req, res) => {
  res.set('Content-Type', 'text/html');
  const response = `
    <!DOCTYPE html>
    <html>
      <head>
        <script crossOrigin="true" type='text/javascript' src='http://0.0.0.0:8080/client.js'></script>
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
