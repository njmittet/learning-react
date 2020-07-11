# react-jsx

This folder contains an example application using React with JSX, and using the JavaScript preprocessor Babel to compile the JSX to JavaScript, in the simplest possible way. The example does not provide a complete development- or production build setup.

The `package.json` provides the following scripts (listed in the order they normally would use them):

1. `npm run build`: Invokes Babel, which compiles the .jsx file residing in `./src` and outputs a .js file to `./public`.
2. `npm start: Starts [http-server](https://www.npmjs.com/package/http-server), which serves the index.html file and the Babel-compiled index.js file.

Note that `npm install` must be runned before executing the above commands.

The example code is mostly an implementation of the code found on [Add React to a Website](https://reactjs.org/docs/add-react-to-a-website.html), with the main differences being an upgrade of [Babel](https://babeljs.io/) and the usage of a `babel.config.json` file.
