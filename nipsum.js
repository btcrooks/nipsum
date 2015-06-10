#!/usr/bin/env node
var lipsum = require('./vendor/lorem'),
    cli = require('cli');

cli.parse({
  word: ['w', 'Generate N number of words.', 1],
  sentence: ['s', 'Generate N number of sentences.', 1],
  paragraph: ['p', 'Generate N number of paragraphs.', 1]
});

cli.main(function(args, options) {
  if (options.word){
    console.log(lipsum.newWord(options.word));
  } else if (options.sentence) {
    console.log(lipsum.newSentence(options.sentence));
  } else if (options.paragraph) {
    console.log(lipsum.newParagraph(options.paragraph))
  }
});

var nipsum;
