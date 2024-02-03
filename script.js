/* 2.  Full Name inside an h1 element */
let fullname = document.createElement("h1");
fullname.innerHTML =  "Full name: Max Dyson";
document.body.appendChild(fullname);

//  The h1 element is centered and its text color is gray
fullname.style.textAlign = "center";
fullname.style.color = "#A9A9A9";

/* 3.  Append two input elements and one button */  
let input1 = document.createElement("INPUT");
input1.setAttribute("type", "text");
input1.setAttribute("id", "num1");
document.body.appendChild(input1);

let input2 = document.createElement("INPUT");
input2.setAttribute("type", "text");
input2.setAttribute("id", "num2");
document.body.appendChild(input2);

let button = document.createElement("button");
button.innerHTML = "+";
button.setAttribute("id", "btn");
document.body.appendChild(button);

/* 4. Create an arrow function to validate the sum of values of the two input boxes. If the input is not a number, show the error 
message on the page and set the input boxes with a red border */
let Num1 = document.getElementById("num1");
let Num2 = document.getElementById("num2");


  // Creating the error message
  let errMessage = document.createElement("p");
  errMessage.setAttribute("id", "pTag1");
  document.body.appendChild(errMessage);

  let errMessageId = document.getElementById("pTag1");

 // Displaying the sum of the two values
   let displaySum = document.createElement("p");
   displaySum.setAttribute("id", "pTag2");
   document.body.appendChild(displaySum);


document.getElementById("btn").addEventListener('click',function(){addtwoNumbers(Num1,Num2,errMessageId,displaySum)})

let addtwoNumbers = (Num1, Num2, errMessageId,displaySum) => {
 errMessageId.innerHTML = "";
 let answer = 0;

 // Styleing a red border for the input boxes when the error message appears.
if (isNaN(Num1.value)){
  Num1.style.borderColor = "red";
}

else {
  Num1.style.borderColor = "blue";
}

if(isNaN(Num2.value)){
  Num2.style.borderColor = "red";
}
else{
  Num2.style.borderColor = "blue";
}

 // Displaying the sum of the two values
 answer = Number(Num1.value) + Number(Num2.value);
 displaySum.innerHTML = `"The sum of the two values is: ${Number(answer)}" `;
 displaySum.style.display = "inline";
 displaySum.style.fontSize = "20px";


// Creating the error message when the input is not a number
  try {
    if (isNaN(Num1.value) || isNaN(Num2.value)) {  
     throw "is not a number!";
    }
  }

  catch (error){
 errMessageId.innerHTML = "Input " + error;
 errMessageId.style.color = "red";
 errMessageId.style.textAlign = "center";
  }
 }

/*  5. Styling the page  */
// Fullname
fullname.style.backgroundColor = "#00bfff";
fullname.style.height =  "70px";
fullname .style.width = "1450px";
fullname.style.padding = "20px";

// Button 
button.style.marginTop = "150px";
button.style.marginLeft = "800px";
button.style.borderColor = "black";
button.style.backgroundColor = "#0099ff";
button.style.color = "#1a1a1a";
button.style.fontSize = "30px";
button.style.height  = "60px";
button.style.width = "150px";
button.style.padding = "10px";
button.style.borderRadius= "20%";

// Input1
input1.style.marginLeft = "600px";
input1.style.borderColor = "blue";
input1.style.height  = "40px";
input1.style.width = "150px";

//Input 2
input2.style.borderColor = "blue";
input2.style.height  = "40px";
input2.style.width = "150px";