const Vue = require('vue')
const { readFileSync } = require('fs')
const compiler = require('vue-template-compiler')
const renderer = require('vue-server-renderer').createRenderer()

const App = compiler.ssrCompileToFunctions(readFileSync('./App.vue', 'utf-8'))

var express = require('express')
var app = express()

app.get('/', (req, res) => {
  renderer.renderToString(new Vue(App))
  .then((html) => {
    res.write('<!DOCTYPE html><html><body>')
    res.write('<div id="content">')
    res.write(html)
    res.write('</div></body></html>')
    res.end()
  })
  .catch((err) => {
    res.send(err)
  })
});

app.listen(5000);
console.log('Listening at localhost:5000')