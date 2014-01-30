function repeat(str, num) {
  if( num == 0 ) {
    return "";
  }
  else {
    var empty = "";
    for( var i = 0; i < num; i++ ) {
      empty = empty + str;
    }
    return empty;
  }
} 

function join(arr) {
  var len = arr.length;
  if len == 0 {
    return "";
  }
  else {
    for( var i = 0; i < len; i++ ) {
      return "" += arr[i];
    }
  }

}

// function sum() {

// }

// function paramify() {

// }

// function factorial() {

// }