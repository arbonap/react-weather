var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Patricia',
    location: 'San Francisco'
};

var objTwo = {
    age: 24,
    ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate app</h1>, document.getElementById('app'));
