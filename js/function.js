//*************************************************
/*
1. Variables
2. Alerts, Console, Comments (Debugging)
3. Data Types
4. Arrays
5. Testing
6. Logic
7. Functions
*/
//*************************************************

//Variables

//variables are things that we can store values in
var x=10;
//the variable x contains the value of 10
var x=20;
//now the variable x contains the value of 20.
//variables can be overwriten

//*************************************************

//Alerts, Console, and Comments

//alerts alert you to JS activity via a pop-up window

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
the following symbols:
/**/

/*alerts, console log outputs, and comments are three 
ways to help debug code and to aid in code readability.
*/

//*************************************************

//Data Types

/*there are different data types- string, number,
boolean, array.*/

var x=10;								//this is a number
var y="js";							//this is a string
var z=true;							//this is a boolean
var a=[1,2,3];					//this is an array

var num=1+3;			

/*numbers can be added, subtracted, multipled, and 
divided. they can also be divided and give a 
remainder with the modulus operator (%)*/

console.log(num);

var name="john";		

/*strings are snippets of text.they are denoted by 
quotation marks*/

console.log(name);

var bool=5>3;				

/*booleans are truth or false values. 
they compare other variables and things to determine
whether a condition is true or false. it can compare
if something is greater than ">", less than "<" or
equivalent to "==". there is also "===", which checks
not only for equivalence in value but also in data 
type (5=="5" would return true but 5==="5" would 
return false)*/

console.log(bool);

//this will return true

//*************************************************

//Arrays

//arrays can be thought of as storage spaces.

var box=["a","b","c"];

/*arrays can hold several values. you can also have 
an array that has different types of data types. 
these are called polymorphic arrays*/

var strangebox=["sphere",10,5===5];

/*they can also hold other arrays inside*/

var hyperbox=[[1,3,5],[2,4,6],["x","y","z"]];

console.log(box);
console.log(strangebox);
console.log(hyperbox);

/*to access items in an array, you can call on its 
index number. array indices start at 0, so the index
number for "a" in the box would be 0*/

console.log(box[0]); 		//this should give you "a"

//*************************************************

//Testing

/*to test conditions, we use the boolean operators 
(< for greater than,> for lesser than,== for 
equivalence in value,=== to find equivalence in 
data type and in value, != to find nonequivalence)*/

console.log(5>4);
console.log(4<3);
console.log(10==10);
console.log("10"===10);
console.log(1!=3);

/*there are also the less than or equal to "<=", 
greater than or equal to ">=", and nonequivalence 
in data type and value "!=="*/

/*to use these, we can use if statements. if 
statements check the condition given to see if 
it is true or false. if true, the if statement will
execute. if not, the else statement will execute*/

if (4>2) {
	console.log("success");
} else {
		console.log("failure");
	}
//success

if (4>6) {
	console.log("success");
} else {
		console.log("failure");
	}
//failure

/*if we check the console log, we can see the first 
if statement is true since the output was a success
and the second was false since the output was a 
failure*/

//*************************************************

//Logic

/*logic is the way we test for boolean conditions. 
the boolean operators <,>,==,===,!=, and !==, all 
check if a certain condition is true or false. you 
can use two at a time with the and (&&) or the or 
(||) operator. to be true, both conditions of an && 
comparison must be true, for an || operation, only 
one needs to be true*/

var x=(5>3)&&(5<7);					//should be true
// 5>3 is true and 5<7 is true
var y=(5>8)&&(5<7);					//should be false
//5>8 is false and 5<7 is true
var z=(5>8)&&(5<2);					//should be false
//both 5>8 and 5<2 are false
console.log(x);
console.log(y);
console.log(z);

var a=(5>3)||(5<7);					//should be true
// 5>3 is true and 5<7 is true
var b=(5>8)||(5<7);					//should be true
//5>8 is false but 5<7 is true
var c=(5>8)||(5<2);					//should be false
//both 5>8 and 5<2 are false
console.log(a);
console.log(b);
console.log(c);

/*let's revisit the if statment. an if statement 
akes a condition and exectutes specific code if 
the condition is true*/

if(5>1){
	console.log("this is big success!");
};

/*the condition 5>1 is true, so the if statment 
should execute, which will print a console log 
to the console.*/

if(5<1){
	console.log("this is big success!");
}else{
	console.log("this is epic fail");
};

/*in the case of an if statement not having a true 
statement, it won't run. however, there is a way to 
avoid an issue with an else statement. if the 
condition for the if statment is false, the else 
statement will be executed instead. the message in 
the console should be the one in the else statement
since the condition is false for the if statment.*/

/*an extension of if and else statments is to add an 
else if statement. this can help make an if statment
more powerful since there can be several conditions 
and several pieces of code inside an if statment, 
which will activate depending on the condition.*/

if (10<5) {
	console.log("this is big success!");
}else if(10>5){
	console.log("this is small success...");
}else{
	console.log("this is epic fail");
};

/*an even bigger extension of if statements are 
using loops. an if statement executes once. a loop 
can execute several times. a way to write a loop 
is with a for statement. it looks like an if 
statement; the only difference is that it will 
run the code inside until the initial condition is 
no longer true*/

for (var i=0; i<3;i++) {
	console.log("success!!!");
};

//this will keep printing until i=2, since 2<3 but 
//3!<3



//*************************************************

//Functions
/*a function is a bunch of code that can be executed 
to achieve a result.*/

function name(){
	//thing to be done;
	//other thing to be done;
};


/*functions have names and take arguments to execute 
code and return a value*/

function say_name(name){
	console.log("my name is "+name);
};

say_name("generic");

/*in this example, the argument given was a variable 
called "name", which is used inside the function 
to stand for the actual argument that can be given 
once the function is called. the function is given 
a name to be called for later use, and the code 
inside the function outputs a string to the console 
log. when the function is called, the argument, the 
name "generic" in this case, passes through to the 
variable, so the final output looks like "my name 
is generic". that's a function! functions can be 
written in all types of ways to create many types 
of things happen.*/

//*************************************************

//Example Functions

//this is a calculator function. a broken one
function calculator(num1, num2){
	var num3=num1+num2;
	num3=num3*3;
	console.log(num1 + "+" + num2 + "=" + num3);
	console.log("wait a minute...");
};

//function call 1
calculator(3,4);

//*************************************************

//states for stomach
var full=true;
var empty=false;

//this is a way for a stomach to determine whether
//it should receive food or not
function hungry(stomach){
	if (stomach===full){
		console.log("I am full!");
	}else{
		console.log("I am hungry!!!!!");
	};
};

//function call 2
hungry(full);
hungry(empty);

//*************************************************

//days and times
var week="weekday";

var morning=6;
var midday=12;
var night=20;

//this is an alarm to alert you whether you should
//get up, depending on time and date
function alarm(day, time){
	if (day===week) {
		if (time===morning) {
		alert("it's morning, wake up!!!!");
	}else if (time===midday){
		alert("it's midday, you are really late!!!!!!!!!!")
	}else if(time===night){
		alert("it's nighttime, go to sleep...");
	}else{
		alert("ignore this alarm");
	};
	}else{
		alert("don't bother, it's the weekend");
	};
};

//function call 3
alarm("weekday",morning);
alarm("weekday",midday);
alarm("weekday",night);
alarm("weekday",16);
alarm("weekend",6)

//*************************************************
//The End
//*************************************************