function Calculator() {
  this.stack = [0]; // define stack as an array containing 0
};

//Calculator.defineProperty

Calculator.prototype = {
  value: function() {
    return this.stack[this.stack.length - 1];
  },
  add: function(x) {
    this.push(x);
    this.plus();
  },
  subtract: function(x) {
    this.push(x);
    this.minus();
  },  
  divide: function(x) {
    var a = this.pop();
    var b = this.pop();
    this.stack.push(b/a);
  },
  times: function(x) {
    var a = this.pop();
    var b = this.pop();
    this.stack.push(b*a);
  },
  plus: function() {
    this.stack.push(this.pop() + this.pop());
  },
  minus: function() {
    //this.stack.push(this.pop() - this.pop());
    var a = this.pop();
    var b = this.pop();
    this.stack.push( b - a );
  },
  push: function(value) {
    this.stack.push(value);
  },
  pop: function() {
    var value = this.stack.pop();
    if (typeof(value) == 'undefined') { // only pop if something there
      throw "calculator is empty";
    }
    return value;
  },

  END: null
};