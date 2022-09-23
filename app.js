//23092022 
// npm - global command, comes with node.js
// npm --version, npm -v
// local dependency - use it only in this particular project
// npm i <packageName>
// global dependency -use it in any project
// npm install -g <packageName>

// package.json -manifest file (stores important info about project/package, store the dependency) for ex. npm i lodash and bootstrap, added loadsh in node_modules
// manual approach (create package.json in the root, creat properties etc)
// npm init (step by step press enter to skip)
// npm init -y (everything default) goog choice

const _ = require('lodash');
const items = [1, [2, [3, [4, 5]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);