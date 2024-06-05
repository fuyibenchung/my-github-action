// main.js
const core = require('@actions/core');

const name = core.getInput('name');
console.log(`Hello, ${name}! Welcome to the world of GitHub Actions.`);
