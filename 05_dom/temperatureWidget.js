 function TemperatureWidget() {
  function f2c(f) {
    return Math.round((f-32) * (5.0/9.0));
  }

  function c2f(c) {
    return Math.round(c * (9.0/5.0) + 32);
  } 
 }
 