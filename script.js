///var topics = "HTML, Python, CSS, Git, JavaScript";


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
////var topics = ["HTML","CSS","JavaScript","Git"]
// For Loop
//// for( z = 0; z < topics.length; z++) {
////   console.log(topics[z]);}

// Conditional statements are were you -
// 1st define a var then if ( var === "var-name" ) 
// and initilise it ;
// 2nd give it an output condition to meet 
// {console.log("My Condition was met") and initiilise it;}


if ( shape === "circle")
{console.log("I love circles!");}
 else {console.log("Please Try Again ;P");}

// array

////var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// function listTopics() {
//   for(var x = 0; x < topics.length; x++)
//   {console.log(topics[x]);}
// }

// listTopics();

function selectTopic ()
{
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
}

selectTopic();

// Define a Funcation -> Call a Function in order for it to work
// Code declaration -> Code block inside the declaration
// To Call a Function function-name();

function helloWorld() {
  console.log("Hello Harry! I am a function!");
}

helloWorld();
// 

// var color = "green";
// Conditional Statement which is Function

// function favColor() {
//   if  ( color === green)
//   {console.log("My Favorite Colour is Green");
//   } else {console.log("That didn't work!");}}



// favColor();



// For Loop which is wrapped in a Function
// var topics = ["HTML", "CSS", "JavaScript", "Git"];

// function listTopics() {
//   for( var z = 0; z < topics.length; z++) 
//   {console.log(topics[z]);}
// }

// listTopics();

// In a for loop the first var x = number it will start running from normally 0 , var x = 0


// For Loop

var color = ["red","blue","green"]

function randomColors() {
for(var b = 0; b < color.length; b++)
{
  console.log(color[b]);
}
}

randomColors();

// Conditional Statement 
//remember to initilise variables
// When making conditional statements Start from if then else if and lastly else 
// if ( var_name === var_name2 ) { take an action which will provide this output and initilise it}
var color = "red";

function favouriteColor()
{
if( color === "green" )
 {console.log("My favourite color is Green!");}
else if( color === "red" )
 {console.log("My favourite color is Red!");}
else if( color === "blue" )
 {console.log("My favourite color is Blue!");}
else {console.log("Try Again 👎")}
}

favouriteColor();

console.log("/////////")
console.log("/////////")
console.log("/////////")
console.log("/////////")
console.log("/////////")

///////

///* means all items
//// .length means how many it will go through
//initilise the math.random then initilise the whole line 
//var var_name = var_name_of_array[Math.floor(Math.random()* var_name.length)];





/// topics[Math.floor(Math.random()* topics.length)];


var topics = ['HTML','CSS','Git','Javascript'];
var randomTopic = topics[Math.floor(Math.random()* topics.length)];

function showTopics()
{
  for( var w = 0; w < topics.length; w++)
  {
    console.log(topics[w]);
  }
}





// var topic = "CSS";

function mainTopic()
{
  if(randomTopic === "HTML")
  {
    console.log("Let's learn HTML!");
  }
  else if(randomTopic === "CSS")
  {
    console.log("Let's learn CSS!")
  }
  else if(randomTopic === "Javascript")
  {
    console.log("Let's learn Javascript!")
  }
  else if(randomTopic === "Git")
  {
    console.log("Let's learn Git!")
  }
  else 
  {
    console.log("Fatal Mistake");
  }
}


console.log("These are some of the technologies we learnt in the Pre Work Guide:");

showTopics();

console.log("Which subject should we learn first?")

mainTopic();