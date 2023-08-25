// const userForm = document.getElementById("signup");

// async and await
async function getData(){
  try{
    const response = await fetch("http://localhost:8000/getemployees");
    const data = await response.json();
    displayData(data);
  } catch(err){
    console.log(err);
  }
  
}
// function getData(){
//   fetch("http://localhost:8000/getemployees")
//   .then(response => response.json())
//   .then(data => displayData(data))
//   .catch(err => console.log(err))
// }
//
function displayData(arr) { 
	const container = document.getElementById("getDataDivId");
  for (let i = 0; i < arr.length; i++) {
    const li_employee = document.createElement('li');
    li_employee.innerHTML = arr[i].empName +" - "+ arr[i].empPass;
    li_employee.style.backgroundColor = "yellow"
    container.appendChild(li_employee);
    const br = document.createElement('br');
    container.appendChild(br);
  }
}
// userForm add data
const userForm = document.getElementById("signup");
if(userForm){
  userForm.addEventListener('submit', (e) => {
// userForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = e.currentTarget;
  let formFields = new FormData(form);
  let formDataObject = Object.fromEntries(formFields.entries());
  console.log(formDataObject);
  fetch('http://localhost:8000/addemployee', {
    method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify(formDataObject),
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

});
}  // closing bracket for if statement

// loginForm get data user and set jwt token
const loginForm =  document.getElementById("loginForm")
loginForm?.addEventListener("submit", async function (event) {
  event.preventDefault();

  const empName = document.getElementById("empName").value;
  const empPass = document.getElementById("empPass").value;

  try {
    const response = await fetch("http://localhost:8000/getemployees");
    const employees = await response.json();

    const employee = employees.find(emp => emp.empName === empName && emp.empPass === empPass);

    if (employee) {
      // Simulating fetching a JWT token from the server
      const jwtResponse = await fetch("http://localhost:8000/loginuserJWTtoken");
      const jwtToken = await jwtResponse.text();

      // Store the JWT token in localStorage
      localStorage.setItem("jwtToken", jwtToken);

      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

// document.getElementById("loginForm").addEventListener("submit", async function(event) {
//   event.preventDefault();

//   const empName = document.getElementById("empName").value;
//   const empPass = document.getElementById("empPass").value;

//   try {
//       const response = await fetch("http://localhost:8000/getemployees");
//       const employees = await response.json();
      
//       const employee = employees.find(emp => emp.name === empName && emp.password === empPass);
      
//       if (employee) {
//           // Simulating a JWT token creation
//           const jwtToken = "http://localhost:8000/loginuserJWTtoken";
          
//           // Store the JWT token in localStorage
//           localStorage.setItem("jwtToken", jwtToken);
          
//           // Set token expiration time (15 minutes)
//           const expirationTime = new Date().getTime() + 15 * 60 * 1000;
//           localStorage.setItem("tokenExpiration", expirationTime);
          
//           alert("Login successful!");
//       } else {
//           alert("Invalid credentials. Please try again.");
//       }
//   } catch (error) {
//       console.error("An error occurred:", error);
//   }
// });