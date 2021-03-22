// Midterm final 
// Task: Use the given array below to do the following

// List every item to the page, including its Name 
// Each item should be on a different line
// If the age of the item from the array is above 25, style the text of that line green
// Below my list, there should be a counter that starts at 5. When I click on a button on my webpage, it should increase that value by 1 visually (No prompts allowed here)
// Make sure to be creating a program that is reusable, and not hard coding the correct output. You will take a 0 if you do this
var wrapper=document.body.querySelector(".wrapper");
var counter=document.body.querySelector(".counter");
count=5;
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
// This statement starts the beginning. We start by having it call out a specific array based on age above 25. Setting up the format we want it to be in. Name is h1, age is h2
for (var i=0; i<list.length; i++){
  var element=document.createElement("div");
  var nameElement=document.createElement("h1");
  var ageElement=document.createElement("h2");
  if (list [i].age>=25){
    element.style.color="green";
  }
  // We are now organizing the list on the page, setting up the text to seperate into names and ages.
  nameElement.innerHTML="Name: " +list[i].name;
  ageElement.innerHTML="Age: " +list[i].age;
  element.appendChild(nameElement);
  element.appendChild(ageElement);
  wrapper.appendChild(element);
  
}
// Use += for the counter, equation= x+y so count+1, count starting at 5
// Have counter start at 5 and go on from there , NO PROMPTS
// text should state the amount of times clicked ...
counter.onclick=function(){
  count+=1;
  counter.innerHTML="You have clicked: "+count;
}

//  Finished