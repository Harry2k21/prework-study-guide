var topics = "HTML, Python, CSS, Git, JavaScript";
console.log(topics);

// Main Variables which link to all console.log s
var topic = "JavaScript";
var shape = "circle";

// Arrays of Data
var shapes = ["circle", "square", "triangle", "pentagon"];
var studentInfo = ["Lucy", true, 22];


console.log(shapes[2]);
console.log(studentInfo[2]);
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

//For Loops Three part initilised conditional statement
// For Loops - Run Through The Whole Array of Data 
// 1st for ( var x = 0; x < var-name.length ; x++)
// {
// console.log(var-name[x]);
// }
// 1st condition initilise the variable and where it should start from x = 0
// 2nd condition initilise till when the loop should run 
// trough the array for with var-name.length
// 3rd condition initilise by telling the for loop to add 1+ on top of every run of the array
// then to see if it works console log the var-name[x] and initilise it
var y = 0;
y < studentInfo;

for(var y = 0; y < studentInfo.length; y++) {
  console.log(studentInfo[y]);
}

var x = 0;

// Means it will run through all the x variables of 
// variable-name.length till its gone through the whole array of data
x < shapes.length;

// Means x+1 (its a shortcut)
x++

// First its define that variable x will start with 0 and
// then ; initialises it and then x < var-name.length makes
// it go through the whole array of data 
// and shows the array then its initialised
// with ; and then the loop is told to keep adding 1+ to x
// variable so that it runs trough the array
// 
for(var x = 0; x < shapes.length; x++) {
console.log(shapes[x]);
}

// for (let shapes = 3)
// console.log(shapes)

// Array
var topics = ["HTML","CSS","JavaScript","Git"]
// For Loop
for( z = 0; z < topics.length; z++) {
  console.log(topics[z]);}

// if statement are conditional statements were you -
// 1st define a var then if ( var === "var-name" ) 
// and initilise it ;
// 2nd give it an output condition to meet 
// {console.log("My Condition was met") and initiilise it;}


if ( shape === "circle")
{console.log("I love circles!");}
 else {console.log("Please Try Again ;P");}





if (topic === "HTML") {
console.log("Let's study HTML!");
}
else if (topic === "CSS") {
console.log("Let's code in CSS!");
}
else if (topic === "JavaScript") {
console.log("Let's code in JavaScript!");
}
else if (topic === "Python") {
console.log("Let's Code in Python");
}
else if (topic === "Git") {
console.log("Let's utilise Git!");
} else { 
console.log("Please Try Again(Re-Enter the value)");

}

// Define a Funcation -> Call a Function in order for it to work
// Code declaration -> Code block inside the declaration
// To Call a Function function-name();