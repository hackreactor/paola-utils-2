const GSheets = require('./googleSheets');
const GGroups = require('./googleGroups');
const GMail = require('./googleMail');
const Salesforce = require('./salesforce');
const GitHub = require('./github');
const Learn = require('./learn');
const Slack = require('./slack');

// ------------------------------
// API Integrations
// ------------------------------
// Prerequisites and Limitations:
//
// 	⁃	Get API credentials for each API
// 	⁃	Determine rate limits of each API
// 	⁃	Make a list of required docs page links to inform each function’s implementation
//
//  TDD:
//
//  ⁃	Write tests that verify success for each function
//  ⁃	Write tests to verify successful handling of errors for each function
//

// TODO: Ultimately, we'll remove helloWorld. Just a test to make sure the NPM module is working :)
exports.helloWorld = () => `Hello World, I'm Paola!`;

exports.GSheets = GSheets;
exports.GGroups = GGroups;
exports.GMail = GMail;
exports.Salesforce = Salesforce;
exports.GitHub = GitHub;
exports.Learn = Learn;
exports.Slack = Slack;
