#!/usr/bin/env node
var lipsum = require('../vendor/lorem');

var nipsum;
process.argv.forEach(function(val, index) {
  console.log(index + " : " + val);
});

console.log(lipsum.newSentence(1));
