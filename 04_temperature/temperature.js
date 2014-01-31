function f2c(f) {
  return (f-32) * (5.0/9.0)
}
  
function c2f(c) {
  return c * (9.0/5.0) + 32
}

function Temperature(degFahrenheit) {
  this.fahrenheit = function() {
    return degFahrenheit;
  }
  this.celcius = function() {
    return ((degFahrenheit - 32) * (5.0/9.0));
  }
  this.setFahrenheit = function(f) {
    degFahrenheit = f;
  }
  this.setCelcius = function(c) {
    degFahrenheit = c * (9.0/5.0) + 32;
  }
}