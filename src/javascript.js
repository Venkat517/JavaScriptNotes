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


/// date in javascript
Date()
"Mon Mar 22 2021 21:34:45 GMT+0530 (India Standard Time)"
let a = Date()

a.substr(0,15)
"Mon Mar 22 2021"
a.substr(16,8)
"21:35:00"

var b = new Date()
b.getDate()
22
b.getFullYear()
2021
b.getTime()
1616429417902

sunday is 0 
january is 0

////Switch 

var name = 'Sandeep'
undefined
switch(name){
    case 'Sandeep':
        console.log('You are a user');
        break;
    case 'Deepu':
        console.log('You are an Admin');
        break;
    default :
        console.log('You dont have any privilages');
}
You are a user
undefined
var name = 'adad'
undefined
switch(name){
    case 'Sandeep':
        console.log('You are a user');
        break;
    case 'Deepu':
        console.log('You are an Admin');
        break;
    default :
        console.log('You dont have any privilages');
}
You dont have any privilages


if we don't specify break, it will pirnt the true conditon and below one's too


// number is odd or even using the swith case

var num = 3.2;

switch(num%2) {
    case 0: 
        console.log('number is even');
        break;
    case 1:
        console.log('number is odd');
        break;
    default:
        console.log('number is neither even nor odd')
}

// Regular expression

-It is use to match the pattern 
 starts with ^ and ends with $ (^$)

("^([a-z])$")
var t = 'r'
t.match("^([a-zA-Z0-9])$")

t.match("^([a-z]{2})$")
(2) ["r", "r", index: 0, input: "r", groups: undefined]

[] - It matches the pattern for the first Character 

{1} - It matches the first CharacterData

{2,4} - min 2 and max 4

+ - It matches for any length

It should start with number and rest any thing else
data.match("^([1-9]+)([a-zA-Z]+)$")

/////Arrays

It is a collection of homogenous data

var a = ['a','23','daad']
var b = [1,3,4,5,3]
var c = [true,false,true]

But in JavaScript and python

It is a collection of homogenous and hetrogenous

var d = ['exmaple',23,false];

var city = ['Delhi','Hyderabad','Mumbai']

typeof(city) is an object
object

var city = ['Delhi','Texas','Newyork']
undefined
typeof(city)
"object"
city.length
3
city[2]
"Newyork"

city[city.length-1]
"Newyork"

city.push('SanJose')
4
city
(4) ["Delhi", "Texas", "Newyork", "SanJose"]
city.push('extra')
5
city
(5) ["Delhi", "Texas", "Newyork", "SanJose", "extra"]
city.pop()
"extra"
city
(4) ["Delhi", "Texas", "Newyork", "SanJose"]

pop(3) - pop with any index value is not counted, it only removes lst element

pop will remove at beigning
push will add at end
unshift will add at beigning
shift will remove always from beigning

city.unshift('one')
5
city
(5) ["one", "Delhi", "Texas", "Newyork", "SanJose"]
city.unshift()
5
city
(5) ["one", "Delhi", "Texas", "Newyork", "SanJose"]
city.unshift('two')
6
city
(6) ["two", "one", "Delhi", "Texas", "Newyork", "SanJose"]


//////////////functions//////////////////

function greet() {
  console.log('Normal function')
}
greet()

o/p Normal function
we need to call the function explictly to generate the output

///IIFE//// Immediately invokable functions

(function(){
  console.log('calling IIFE')
}())
this function will be executed on the page load without calling explicitly

////genarator function/////
we will control the flow of the function output when to show the value

//without control
function random(userInput) {
  for (i=0;i<userInput; i++)
    console.log(i)
}
random(4)
0
1
2
3

//with control
function * alpha(x) {
    for(i=0;i<x;i++){
        yield i;
    }
}

var date = alpha(4)

data.next() // it will load the data when in need
{value: 0, done: false}done: falsevalue: 0[[Prototype]]: Object
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}

/////////////// Map & Filter //////////////

var a = [1,234,433,54,3,4,546,65,737,67,54,6,3634,364]
undefined

a.map((data) => {return data})
(14) [1, 234, 433, 54, 3, 4, 546, 65, 737, 67, 54, 6, 3634, 364]

let's multiply the input array by 2
a.map((data) => {console.log(data*2)})
(14) [1, 234, 433, 54, 3, 4, 546, 65, 737, 67, 54, 6, 3634, 364]

VM589:1 2
VM589:1 468
VM589:1 866
VM589:1 108
VM589:1 6
VM589:1 8
VM589:1 1092
VM589:1 130
VM589:1 1474
VM589:1 134
VM589:1 108
VM589:1 12
VM589:1 7268
VM589:1 728


map will iterate and return the array...
> it will always return the same length as input array
> it is used to apply the logic as sum, multiply ..etc

FILTER:

it is use to filter the values from array.
> it may or maynot retutn the same length as input array
> it only returns those value which ouptut is true

var b=[5,11,3,6,8,23,24,15,22,13,10]
b.filter((data) => {return data >10})
(6) [11, 23, 24, 15, 22, 13]
0: 11
1: 23
2: 24
3: 15
4: 22
5: 13

b.map((data) => {return data >10})
(11) [false, true, false, false, false, true, true, true, true, true, false]

tricky q
var a=[0,1,2,3]
a.map((data) => { return data*2 })
(4) [0, 2, 4, 6]

var a=[0,1,2,3]
a.filter((data) => { return data*2 })
(3) [1, 2, 3]

//////let & var 

var > we can able to redeclare and reassign
let > we cannot able to redeclare and can reassign
const > we cannot redeclare and reassign


////clouser ///

clouser is something where we can close or restrict the scope

var a =10;  //global scope

function add() {
  var b=20; // local scope
  return a+b;
}
console.log("ADD", add());
console.log("value of a", a);
console.log("value of b", b);

o/p
"ADD"
30
"value of a"
10
"error"
"ReferenceError: b is not defined


{} will consider as clouser only in the functions but not in loops.

var a =10;

for (i=0; i<10; i++) {
  var b=20;
  console.log(a+b+i);
}

console.log("value of a", a);
console.log("value of b", b);

30
31
32
33
34
35
36
37
38
39
"value of a"
10
"value of b"
20

let helps to restrict the scope...

///// hoisting ////

we can call the function even before the declaration


var a
undefined

typeof(a)
undefined

var b = null
typeof(b)
object


///////////////// Object ///////////////////

Single object can have n number of properties

var movies = {
  name : 'avengers',
  rating: 3.5,
  lang: 'english'
}

undefined
typeof(movies)
'object'
//// dot notation
movies.name
'avengers'
movies.lang
'english'
movies.rating
3.5
movies.rating = 3.9
3.9
movies
{name: 'avengers', rating: 3.9, lang: 'english'}
///// bracket notation
movies["lang"]
'english'

> we can access the properties
> we can add a propety
> we can modify the property
> we can delete the property

JSON - having multiple objects in a array
> a way to reprsent the data
> a key value pair of the data

var movies = [
  {
  name : 'avengers',
  rating: 3.5,
  lang: 'english'
},
  {
  name : 'teal',
  rating: 3.5,
  lang: 'english'
},
  {
  name : 'dil',
  rating: 4.5,
  lang: 'telugu'
}
]

movies
(3) [{…}, {…}, {…}]
0: {name: 'avengers', rating: 3.5, lang: 'english'}lang: "english"name: "avengers"rating: 3.5[[Prototype]]: Object1: {name: 'teal', rating: 3.5, lang: 'english'}2: {name: 'dil', rating: 4.5, lang: 'telugu'}length: 3[[Prototype]]: Array(0)

movies.name
undefined
movies[1].rating
3.5
movies[0].name
'avengers'

*****************
 when a function is assigned to a variable it become method
 we can call multiple times
 var calc = {
   sum:function(a,b) { return a+b }
   sub: (a,b) => { return a-b }
}
undefined
calc.sum(3,5)
8
calc.sub(10,3)
7


var dbquery = {
  find:(table) => { return `select * from ${table}` }
}

undefined
dbquery.find('student')
'select * from student'

////////// This ///////

this keyword refers to the above scope

var lastName = 'Scott'

var sayHi = {
  firstName: 'zoe',
  lastName: 'Lisa',
  people:function() {
    return `say hi to ${this.firstName} ${this.lastName}`
}
}

console.log(sayHi.people())
o/p

"say hi to zoe Lisa"

///// defining an object using construtor notation //////

var bob = new Object();  ///object bob is created with no properties
bob.age = 29 // assigned age property
obj.setAge=function(newAge){
  this.age= newAge;
}
////
var createAge = function(newAge) {
  this.age = newAge
}

var bob = new Object();
  bob.age = 29
  bob.city = 'delhi'
  bob.setAge = createAge

var tony = new Object();
  tony.age = 29
  tony.city = 'delhi'
  tony.setAge = createAge
  
o/p  
ƒ (newAge) {
  this.age = newAge
}
bob
{age: 29, city: 'delhi', setAge: ƒ}
bob.setAge(28)
undefined
bob
{age: 28, city: 'delhi', setAge: ƒ}

//////////////// functions as an object ////////////////

function language(name,country){
    this.name = name;
    this.country = country;
}
undefined

var hindi = new language('hindi','india') // creating obj using constructor
undefined
hindi // hindi is a obj having name and country as a properties
language {name: 'hindi', country: 'india'}


/// in es6 we can do by using classes

class language {
  constructor(name.country) {
    this.name = name;
    this.country = country;
  }
}
var eng = new language('English','USA')


//////// prototpyes/////////////

//in es5

function human(name) {    /// one arg as name
  this.name = name;
  this.city = 'london';
}

function robot(name) {. 
  this.name = name;
  this.legs = 2;
  this.color = 'red'
}

human.prototype = new robot() //acessing the robot properties to the human

var john = new human ('joy')
robot {name: undefined, legs: 2, color: 'red'}

var chitti = new robot('robo')
undefined
chitti
robot {name: 'robo', legs: 2, color: 'red'}
john.color /// human can stil access the propeties of robot
'red'
john.legs
2

//// using es6

class geo {
  constructor(lan,lon) {
    this.lan = 11.1331;
    this.lon = 213.242;
  }
}

class human extends geo {  ///// we will use extends keyword to inhert the properties from geo
  constructor(name,country,lan,lon) {  //// we should declare the geo arg in constructor
    super(lan,lon)  /// to differentiate geo properties we will place in super
    this.name = name;
    this.country =country;
  }
}

