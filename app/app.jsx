var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');

// this is destructuring syntax
// line 3 is the same as:
// var Route = require('react-route').Route;

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>

      </Route>
    </Router>,
     document.getElementById('app')
   );
