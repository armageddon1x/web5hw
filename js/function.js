//Variables

//variables are things that we can store values in
var x=10;
//the variable x contains the value of 10
var x=20;
//now the variable x contains the value of 20.
//variables can be overwriten

//Alerts, Console, and Comments

//alerts alert you to JS activity
alert("hi");
//this will show up once you open the page

//the console can be used by developers to check
//things out in the code.
console.log("i exist")
console.log("x");
//if you check the console tab on the developer tools
//in chrome, the lines written above ("i exist", "x")
//should show up in the console.

//comments are useful to explain things in the code
//that wont actually affect the code. single comments
//can be written with two slashes

/*multiple lines of code can be written in between
the following symbols
/**/

//Data Types

/*there are different data types- string, number,
boolean, array.*/

var x=10;								//this is a number
var y="js";							//this is a string
var z=true;							//this is a boolean
var a=[1,2,3];					//this is an array

var num=1+3;							/*numbers can be added, 
subtracted, multipled, and divided. they can also be 
divided and give a remainder with the modulus 
operator (%)*/
console.log(num);

var name="john";			/*strings are snippets of text.
they are denoted by quotation marks*/
console.log(name);

var bool=5>3;					/*returns true
booleans are truth or false values. they 
compare other variables and things to determine
whether a condition is true or false. it can compare
if something is greater than ">", less than "<" or
equivalent to "==". there is also "===", which checks
not only for equivalence in value but also in data 
type(5=="5" would return true but 5==="5" would 
return false)*/
console.log(bool);

//Arrays

var box=["a","b","c"];/*arrays hold several values. 
you can also have an array that has different types of 
data types. they are called polymorphic arrays*/
var strangebox=["sphere",10,5===5];
/*they can also hold arrays inside*/
var hyperbox=[[1,3,5],[2,4,6],["x","y","z"]];
console.log(box);
console.log(strangebox);
console.log(hyperbox);
/*to access items in an array, you can call on its 
index number. array indices start at 0, so the index
number for "a" in the box would be 0*/
console.log(box[0]); //this should give you "a"

//Testing

/*to test functions, we use the boolean operators 
(< for greater than,> for lesser than,== for 
equivalence in value,=== to find equivalence in 
data type and in value, != to find nonequivalence)*/

console.log(5>4);
console.log(4<3);
console.log(10==10);
console.log("10"===10);
console.log(1!=3);

/*to use these, we can use if statements. if 
statements check the condition given to see if 
it is true or false. if true, the if statement will
execute. if not, the else statement will execute*/

if (4>2) {
	console.log("success");
} else {
		console.log("failure");
	}

if (4>6) {
	console.log("success");
} else {
		console.log("failure");
	}

/*check the console log, we can see the first if
statement is true since the output was a success
and the second was false since the output was a 
failure*/

//Logic

/*logic is the way we test for boolean conditions. 
the boolean operators <,>,==,===, and != all check 
if a certain condition is true or false. you can use 
two at a time with the and (&&) or the or (||) 
operator. to be true, both conditions of an && 
comparison must be true or false, for an || 
operation, only one needs to be true*/

//Functions

