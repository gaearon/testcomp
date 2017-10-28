const React = require("react")

module.exports = () => {
  return (
    React.createElement('ul', null, items())
  );
}

const items = () => {
  var out = new Array(10000);
  for (let i = 0; i < out.length; i++) {
     out[i] = React.createElement('li', {key: i}, 'This is row ', i + 1)
  }
  return out
}
