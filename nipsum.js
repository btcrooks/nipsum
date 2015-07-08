#!/usr/bin/env node
var lorem = require('./vendor/lorem'),
    cli = require('cli');

cli.parse({
  word: ['w', 'Generate N number of words.', 1],
  sentence: ['s', 'Generate N number of sentences.', 1],
  paragraph: ['p', 'Generate N number of paragraphs.', 1]
});

cli.main(function(args, options) {
  if (options.word){
    console.log(lorem.newWord(options.word));
  } else if (options.sentence) {
    console.log(lorem.newSentence(options.sentence));
  } else if (options.paragraph) {
    console.log(lorem.newParagraph(options.paragraph))
  } else {
      console.log('Usage: nipsum [OPTIONS] [ARGS]');
      console.log("Run 'nipsum -h' for help");
  }
});
