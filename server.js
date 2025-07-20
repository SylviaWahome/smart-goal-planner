// server.js

const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 4000;

server.use(cors());

server.use(middlewares);

server.use('/goals', router); 

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}/goals`);
});
