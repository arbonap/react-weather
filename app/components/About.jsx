var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component!</h3>
//     )
//   }
// });
// Can be done because this is a
// stateless component that doesn't
// maintain state

var About = (props) => {
  return (
    <h3>About Component!</h3>
  )
};

module.exports = About;
