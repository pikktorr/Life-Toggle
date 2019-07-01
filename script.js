// let workButton = document.querySelector("#work");
// let lifeButton = document.querySelector("#life");
// let sleepButton = document.querySelector("#sleep");

let div = document.querySelector("div");
let box = document.querySelectorAll("#box");
let lastClick = [];

const classToggle = () => {
    
     lastClick.push(event.target);
     console.log(lastClick);
};

console.log(lastClick);

div.addEventListener('click', classToggle);

// function classToggle() {
//     if(workButton.checked && lifeButton.checked){
//         sleepButton.checked = false;
//     }
//     else if (workButton.checked && sleepButton.checked){
//         lifeButton.checked = false;
//     }
//     else if (lifeButton.checked && sleepButton.checked){
//         workButton.checked = false;
//     }
// }

// workButton.addEventListener('click', classToggle);
// lifeButton.addEventListener('click', classToggle);
// sleepButton.addEventListener('click', classToggle);

// if(workButton.checked){
//     console.log("Work button checked");
// }


// Add a hidden input for the checkbox with a different ID:

// <input id='testName' type='checkbox' value='Yes' name='testName'>
// <input id='testNameHidden' type='hidden' value='No' name='testName'>
// Before submitting the form, disable the hidden input based on the checked condition:

// if(document.getElementById("testName").checked) {
//     document.getElementById('testNameHidden').disabled = true;
// }