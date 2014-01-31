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

function sum(arr) {
  var len = arr.length;
  var num = 0;
  if( len == 0 ) {
    return 0;
  }
  if( len == 1 ) {
    return arr[0];
  }
  else {
    for( var i = 0; i < len; i++ ) {
      num += arr[i];
    }
    return num;
  }
}

function paramify(hash) {
  var len = Object.keys(hash).length;
  var str = "";
  var arr = [];

  if( len == 0 ) {
    return "";
  }
  else if( len == 1 ) {
    for( var k in hash ) {
      if (hash.hasOwnProperty(k)) {
        return k + "=" + hash[k];
      }
    }
  }
  else {
    arr = Object.keys(hash);
    arr.sort();
    for( var i = 0; i < arr.length; i++ ) { 
      str += arr[i] +"="+ hash[arr[i]] + "&"; 
    }
    return str.substring(0, str.length - 1);
  }
}

function factorial(num) {
  if( num == 0 || num == 1 ) {
    return num;
  }
  else {
    return num * factorial(num - 1);
  }
}