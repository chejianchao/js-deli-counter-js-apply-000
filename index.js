

var num = 0;

var  obj = {list:[], num:0};
function takeANumber(obj){
    obj.num++;
    num+=1;
    obj.list.push(obj.num);
    return `Welcome, You are number ${num} in line.`
}
  
function nowServing(obj){
  var len = list.length;
  if( len == 0 )
    return "There is nobody waiting to be served!"
  var number = list.shift()
  return `Currently serving ${number}.`;
}

  
function currentLine(list){
  var len = list.length
  if( len == 0 )
    return "The line is currently empty."
  var str = "The line is currently:";
  for( var i = 1; i<=len; i++){
    if( i < len )
      str += ` ${i}. ${list[i-1]},`;
    else
      str += ` ${i}. ${list[i-1]}`;
  }
  return str
}

var Queue = function(){
  this.list = [];
  this.num = 0;
  
}
Queue.prototype.takeANumber = function(){
  this.num++;
  this.list.push(this.num);
  return `Welcome, you are number ${this.num} in line`;
}
Queue.prototype.noewServing = function(){
  if( this.list.length == 0 )
    return "nobody to serving";
  var number = this.list.shift();
  return `currently serving ${number}`;
}