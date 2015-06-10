# Nipsum
**N**ode lorum **ipsum** allows you to generate words, sentences and paragraphs of dummy text in the command line.  

### Installation
1) Download nipsum and navigate to the directory
```bash
$ cd path/to/nipsum
```
2) Download dependencies
```bash
$ npm install
```
3) Install nipsum globally
```bash
$ npm install -g
```

### Usage
Currently, nupsum takes a single option followed by a single argument:
```bash
$ nipsum [OPTIONS] [ARGS]
```


Generate words:
```bash
$ nipsum -w <count>
```
Generate sentences:
```bash
$ nipsum -s <count>
```
Generate paragraphs:
```bash
$ nipsum -p <count>
```
Help:
```bash
$ nipsum -h
```

### Getting Fancy :sunglasses: :sunglasses:
Pair `nipsum` with `pbcopy` to send text straight to your clipboard.  
```bash
$ nipsum -p 5 | pbcopy
```

### Roadmap
* Send text to the clipboard using a flag.
* Add version flag.
* Specify a number of characters to use.
* Public npm package.
