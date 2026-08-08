
// Object

let student = {

    name: "Gowdham",

    age: 23,

    course: "MERN Stack",

    completedHTML: true

};

// HTML Elements

const button = document.getElementById("btn");

const output = document.getElementById("output");

// Button Click

button.addEventListener("click", function(){

    let message;

    if(student.completedHTML){

        message = "✅ HTML & CSS Completed";

    }else{

        message = "❌ HTML & CSS Not Completed";

    }

    output.innerHTML = `

    <h2>Student Profile</h2>

    <p><strong>Name:</strong> ${student.name}</p>

    <p><strong>Age:</strong> ${student.age}</p>

    <p><strong>Course:</strong> ${student.course}</p>

    <p>${message}</p>

    `;

});
