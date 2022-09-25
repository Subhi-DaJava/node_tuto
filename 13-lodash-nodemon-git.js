//23092022 
//25092022 install dev dependency  npm i nodemon -D or npm i --save-dev => it's option testing,linting packages 
// scritp : "start": node app.js => npm start go, else npm run nameOfCommand : npm run dev 
// uninstall: npm uninstall packageName, npm uninstall bootstrap; Second approach, delete manually and run npm install, it is ok 
// npm install -g nodemon, it is recommened to install globlly nodemon package


// After push to github ignore node_modules, when clone the repo run nmp install for adding node_modules
// npm - global command, comes with node.j; 
// npm --version, npm -v
// local dependency - use it only in this particular project
// npm i <packageName>
// global dependency -use it in any project
// npm install -g <packageName>
// npm uninstall <packageName>
// package.json -manifest file (stores important info about project/package, store the dependency) for ex. npm i lodash and bootstrap, added loadsh in node_modules
// manual approach (create package.json in the root, creat properties etc)
// npm init (step by step press enter to skip)
// npm init -y (everything default) goog choice

const _ = require('lodash');
const items = [1, [2, [3, [4, 5]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);
console.log('Hello people nodeJS');