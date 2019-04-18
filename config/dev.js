'use strict'
const projectName = process.argv[2] || 'universal';
const fs = require('fs');

fs.writeFileSync('./config/project.js', `exports.name = '${projectName}'`);

const exec = require('child_process').execSync;
exec('npm run dev', {stdio: 'inherit'});