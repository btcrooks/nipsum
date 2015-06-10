#!/usr/bin/env node
var say = require('./say'),
    lipsum = require('../vendor/lorem');

var args = process.argv.slice(2);
console.log(lipsum.newSentence(1));
