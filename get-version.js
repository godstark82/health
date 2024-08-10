const fs = require('fs');
const yaml = require('js-yaml');

// Load pubspec.yaml
const fileContents = fs.readFileSync('pubspec.yaml', 'utf8');
const data = yaml.load(fileContents);

// Extract version
const version = data.version;

// Output version for GitHub Actions
console.log(`::set-output name=version::${version}`);
