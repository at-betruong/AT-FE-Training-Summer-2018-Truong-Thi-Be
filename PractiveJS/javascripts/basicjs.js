//bai 1
function sum_number(a,b) {
  if( a === b ) return 3*(a+b);
  else return a+b;
}
console.log('Bai 1');
console.log(sum_number(10,5));
//bai 2
function compare(a){
  if(a <= 19) return 19 - a;
  else return (a - 19)*3;
}
console.log('Bai 2');
console.log(compare(7));
console.log(compare(19));
console.log(compare(22));
//bai 3
function dividethree(a){
  var output = [];
  var sum=0;
  for(var i=0; i<a.length; i++){
    if(a.charAt(i) !== '*') sum+=+a.charAt(i);
  }
  var b = [];
  for(var j=0; j<=9; j++){
    if((j+sum)%3 === 0) 
    {
      output.push(a.replace('*',j));
    }
  }
  return output;
}
console.log('Bai 3');
console.log(dividethree("1*9"));
console.log(dividethree("1234567890*"));
//bai 4
function dividesix(a){
  var output = [];
  output=dividethree(a);
  for(var i = (output.length - 1); i>= 0 ; i-- ){
    var elementend = output[i].charAt(output[i].length - 1);
    if( elementend%2 !==0)
      output.splice(i,1);
  }
  return output;
}
console.log('Bai 4');
console.log(dividesix("1*9"));
console.log(dividesix("1234567890*"));