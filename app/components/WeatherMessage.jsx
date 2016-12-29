var React = require('react');
var Weather = require('Weather');

var WeatherMessage = ({temp, location}) => {
  return (
        <h3>It is {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
