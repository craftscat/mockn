const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// routing list 
server.use(jsonServer.rewriter({
  "/v1/sign_up": "/sign_up",
  "/v1/sign_up_e": "/sign_up_e"
}))

// Middlewares configuration
server.use(middlewares);

server.use(function (req, res, next) {
  // Change POST method to GET method
  if (req.method === 'POST') {
    req.method = 'GET';
  }
  // Continue to JSON Server router
  next()
})

// Configure default routing based on db.json
server.use(router);
// Json-server listen on http://localhost:3030
server.listen(3030, () => {
  console.log('JSON Server is running');
});
