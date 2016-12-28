var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Patricia';
var anotherMessage = "I love React"

ReactDOM.render(
    <Greeter name={firstName}/>, document.getElementById('app'));
