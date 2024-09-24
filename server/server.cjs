const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

// Create an instance of the JSON server
const server = jsonServer.create();

// Define the path to your db.json file
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Use the default middlewares (logger, static, cors, etc)
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Bind the json-server-auth routes
server.db = router.db; // This is where the db is bound to the app
server.use(auth);

// Now add the router for handling the database (db.json)
server.use(router);

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
