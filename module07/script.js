// console.log("page sucessfully loaded")


// const name = "saugat wasti";   //string
// let profession = "programmer";

// const str = "saugat";  //string
// const num = 3;  //number
// const flt = 3.33;  //float number
// const bool = true;  // or false
// const list = ["item 1", 3, 2, "saugat"];   // array = list
// const thing = null;   // has nothing in it
// const notDefined = undefined; // currently holds no value
// const getAge = function() {return 31;} // This is a function
// const obj={
//     'name' : 'saugat',
//     'profession': 'programmer'
// }

// const age = 18;
// if (age >=18){
//     console.log("Is allowed to vote");
// }
// if(age>=21){
//     console.log("is allowed to drink alcohol")
// }
// else{
//     console.log("not allowed to vote and drink")
// }

// const elems = document.querySelector(".this-class");
// console.log(elems.innerText);

// function addNumber (num1, num2){
//     const total = num1+num2;
// //     return total;
// // }
// // const addedTotal = addNumber(1,9);


// function addNumbers(...numbers){
//     let total =0;
//     for(index in numbers){
//         total = total + numbers[index];
//     }
//     return total;
// } 

// addNumbers(1,4,2,3,7)


// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name"); // Fill this in 
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in. 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
name.innerText = "Saugat";
age.innerText = "23";
dogYears.innerText = "7";


function showDogYears(age) {
//   // Step 3. Cast `age` as a number
//   dogYears.innerText = age * 7;
  const numAge = Number(age)
  return age * 7
}

// // Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears(age.innerText);

// // Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add("real-input");
})// 