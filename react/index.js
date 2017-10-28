var React = require("react")
var { renderToNodeStream } = require("react-dom/server")
var App = require("./App")

var express = require('express')
var app = express()

app.get("/", (req, res) => {
  res.write("<!DOCTYPE html><html><body>");
  res.write("<div id='content'>");
  const stream = renderToNodeStream(React.createElement(App));
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write("</div></body></html>");
    res.end();
  });
});

app.listen(5000);
console.log('Listening at localhost:5000')
