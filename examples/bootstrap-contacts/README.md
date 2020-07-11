# bootstrap-contacts

This folder contain a basic contact list application implemented with [jQuery](https://jquery.com/) and [Bootstrap](https://getbootstrap.com/). A [node.js](https://nodejs.org/en/) application serves a REST API using [Express](https://expressjs.com/). The node.js code is written using ES6.

The `package.json` provides the following scripts:

1. `npm run server`: Starts the REST API backend for the front end application.
2. `npm start`: Starts the [http-server](https://www.npmjs.com/package/http-server) which serves the `index.html` file containing the application front end from the `./public` folder.

Note that `npm install` must be runned before executing the above command.
