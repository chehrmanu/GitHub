// STEP 1

// Convert the following identifiers to Camel Case notation:

var someMonth, getMonth;
function functionTheMonth() {getMonth()};		// function to return current month
const  currentMonth = "June" ;		// a constant
var summerMonth[] = ["May", "June","July"]; 		// an array of summer months
function myLibraryAfunction(){}};	// a function 

var today = new Date();
document.writeln( today.getFullYear() );

//---------------------------------------------------------------

// STEP 2
// example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

const a = 3.9 ;				// numeric literal 
const b = "Hello!" ;		// string literal 
var IsInstructor = false ;	// Boolean literal 
var c = null ;				// literal null value 

// STEP 3
// 3.  two examples of complex/variable expressions

var myExpression = 3 * (4 / 5) + 6;
var otherExpression = Math.PI * radius * radius;



// STEP 4
//4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You.

var strFirstName ;
var strLastName ;
var strAddress ;
var strCity ;
var strState ;
var intZipCode;
var intYourAge;
var strReferralSource;
var booMayWeContactYou;






// STEP 5
// demonstrate 3 , methods for declaring and assigning values to those variables

// method 1
var strFirstName ;
var strLastName ;
var strAddress ;
strFirstName = "Manu" ;
strLastName = "Ria" ;
strAddress = "Balboa Ave.";

// method 2
var strCity = "San Diego" ;
var strState = "Ca." ;
var intZipCode = 92129 ;

// method 3
var intYourAge = 19, strReferralSource = "My Teacher" , intContactYou = 8581921234 ;


// STEP 6

var strFirstName ;
strFirstName = "Manu" ;
var intZipCode = 92129 ;
console.log(strFirstName + " Lives in the area code " + intZipCode);
// or
var strCity = "San Diego" ;
var strState = "Ca." ;
var intZipCode = 92129 ;
console.log("I live in " + strCity + " " + strState  + " " + intZipCode);


var yourName = "Zak Ruvalcaba";
var isInstructor = true;
console.log("\"  + yourName + " is instructor\" is " + isInstructor);

var yourName = "Zak Ruvalcaba";
var age = 29;
console.log( yourName + " is " + age + " years old");


// STEP 7
// Write a program that returns undefined within the console window because of hoisting

var make = "Chevy";
console.log("The car is a " + make + " " + model + ".");
var model = "Camaro";


// STEP 8
/*
    Is the following string literal valid? If not, how would you fix it?

    var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
    console.log(someString);
*/

// No

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

// STEP 9

var x = 200;
var y = null;
x = y ;
console.log(x);

var unDefined1;
console.log(unDefined1);

// STEP 10

var a = "John";
var t = typeof(a) ;         // Returns string 
console.log(t + " is the type of " + a);

var a = "3.14";
var t = typeof(a) ;         // Returns number
console.log(t + " is the type of " + a);    

var a = false ;
var t = typeof(a) ;         // Returns Boolean
console.log(t + " is the type of " + a);


console.log(typeof myCar);  // Returns  undefined



// STEP 11
alert("Hello " + “Manu” + ", welcome to the JavaScript class!”);


// STEP 12
var hello = "Hello ", name = “Manu”,  welcome = “, welcome to the JavaScript class!";
alert (hello + name + welcome);

// STEP 13
var course = "JavaScript";
var hello = "Hello ", name = “Manu”;
welcome = ", welcome to the “;
var class = " class!";
alert (hello + name + welcome + course + class);

// STEP 14
var course = "JavaScript";
var hello = "Hello ", name = “Manu”;
welcome = “Welcome to the “;
var class = " class!";
alert (hello + name + “\n” + welcome + course + class);

// STEP 15
var course = "JavaScript";
var hello = "Hello ";
var name = prompt("What is your name?");
welcome = “Welcome to the “;
var class = " class!";
alert (hello + name + “\n” + welcome + course + class);


// STEP 16
var hello = "Hello ";
var name = prompt("What is your name?");
welcome = “Welcome to the “;
var course = prompt("What class are you taking?");
var class = " class!";
alert (hello + name + “\n” + welcome + course + class);



// STEP 17
var x = 10;
var y = 20;
console.log(x + y);

// STEP 18
var x = 20;
console.log( x + 20);

// STEP 19
var x = 20;
console.log(x *=5);

// STEP 20
var x = 20%3;
console.log(x/=1);

// STEP 21
var x = 5;
var y = 30;
console.log(x=5 || y<10);


/Step 22
var z = 43;
var w = 15;
console.log (z<12 && w > 40);

//Step 23
var widget = ["Car", "AirPlain"];
console.log(typeof widget);



//Step 24
var widget = ["Car", "AirPlain"];
console.log(widget instanceof Object);



//Step 25
var widget = ["Car", "AirPlain"];
console.log(widget instanceof String);




