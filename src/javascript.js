// JAVA SCRIPRT

Mongo DB, Express, React, Node - All three utilizes javascript
 
Version: Both js and ts belongs to ES
    ES - 

dataType: Frist thing to check in any language

    String : ''  or " " (any thing in a quote is String)
    Number : 23, 23.232, 232422424
    Boolean : true or false 

    null
    undefined

variable: 

defing a variable: 
    var a = 'ds'
    var b = 2244
    var c = true
Typeof is inbuilt method in the javascript which tells the typeof variable

modules of smaller to larger is always smaller

2%3 = 2

6%7 = 6

if we add + with string it with Concate

String + string = String
number + number = number
string + number = string
number + string = string 

'10'+10+'10'
10+10+'10'
'10'+10+10


'10'+10+'10'-1
10+10+'10'-1
2009
'10'+10+10-1
101009

if both the side is a pure number as string or number with + they will Concate
but with , * / it will do the operation

true is eqaul to 1
false is eqaul to 0

true + true 
2
true + 10 
11

'hai'+ true
'haitrue'

// comparsion operation

= Assingment
== compare the data
=== compare the data and dataType

JavaScript is caseSensitive

//checking the output and debugging

 console.log('this is mydata')

 alert('just for notification');

 comfirm('do u want to leave?')
 ok = true
 cancel = false

 prompt('to take the user input')
 it will take the value which is Submitted by the user 
 it will return as the string from input box or prompt or anything


converting the string to number ==> parseInt(s)
parseInt will give u pure number

In Es6 Number is new way to conveting to number


//// string operations

These methods are useful for extracting the string from a larger one 

///Sub string
it is a subset of another string.
String.substring(index A, index B), end index is optinal


Slice --- it will remove the first element in the string

var city = 'Delhi'
city.slice(1)
elhi

city.slice(1,4)
elh

slice and substring gives the same result
slice(start,end?)
substring(start,end?)
substr(start,length?)

////////// negative operations on strings

var city = 'Delhi'
city.slice(-1) // gives the last character
i

/////////// repalcing the strings

var str = 'this is a javascript'

str.replace(/a/,'js')
"this is js javascript"

str.replace(/a/g,'js')
"this is js jjsvjsscript"

str.replace(/ /g,'')
"thisisajavascript"

//////Math operations////

Math.floor(Math.random()*100000)
42966
Math.floor(Math.random()*100000)
71896
Math.floor(Math.random()*100000)
10929
Math.floor(Math.random()*100000)
84286

multiple no of zeros for getting the random number with digits 

floor is on lower side
ceil is on lower side
round is on higher side

// generating the random number between the range

Math.floor(Math.random()*(max-min))+min

///lodcal strorage & session storage & cookies

localStorage - it is a persistant Storage(we need to remove manually)

localStorage.setItem('_ID','314424')
undefined
localStorage.getItem('_ID')
"314424"
localStorage.removeItem('_ID')
undefined

//// SessionStorage

sessionStorage - It is non persistant Storage(tab specifc)

sessionStorage.setItem('_SAFJOFA', '32452143');
undefined
sessionStorage.getItem('_SAFJOFA');
"32452143"
sessionStorage.removetItem('_SAFJOFA');
undefined

///Cookies
it is saved bases on web URL, It is dedicated only to that particular link
it has exipry Time


document.cookie="name=value"

/// string literals

var name = 'Avenger';
var rating = 3.5
var type = 'Action';
var region = 'Hollywood'

//ES5

var data = "This movie name is "+ name +" has a rating of "+rating+" and belongs to "+type+" "

//ES6

var data = `the movie name is ${name} has a rating od ${rating} and belongs to ${region}`

////If condition

if(conditon){
    //logic
}else{
    //logic
}

var a = 46324524551
if(a%2==0) {
    console.log(`${a} is an even number);
}else{
    alert(${a} is an odd number`);
}

////Ternary operator
> Its a single line if else condition

a= 10
a=10 ? a : b

var y =9
y>10? y+1 : y-1
8

//// truthy and falsy

truthy = true & 1 which is either positive or negative, except 0

falsy = false & 0 , null, undefined



