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

function join(arr, arg) {
  var len = arr.length;
  var str = "";
  if( len == 0 ) {
    return "";
  }
  if( arg == undefined ) {
      for( var i = 0; i < len; i++ ) {
      str += arr[i];
    }
    return str;
  }
  else {
    for( var i = 0; i < len-1; i++ ) {
      str += arr[i] + arg;
    }
    str+=arr[len-1];
    return str;
  }
}

function sum() {

}

// function paramify() {

// }

// function factorial() {

// }