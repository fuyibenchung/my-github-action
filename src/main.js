const core = require('@actions/core');

try {
  // Get the input parameter value
  const name = core.getInput('name');

  // Perform your action logic here
  console.log(`Hello, ${name}! This is my custom GitHub Action.`);

  // Set an output parameter (optional)
  core.setOutput('output-name', 'Some output value');
} catch (error) {
  core.setFailed(`Error: ${error.message}`);
}