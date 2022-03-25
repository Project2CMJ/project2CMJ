
// const signupForm = document.querySelector("#signup-form");

// signupForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const userObj={
//         username:document.querySelector("#name-signup").value,
//         email:document.querySelector("#email-signup").value,
//         password:document.querySelector("#password-signup").value,
//     }
//     fetch("/api/users",{
//         method:"POST",
//         body:JSON.stringify(userObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             const userObj={
//                 email:document.querySelector("#email").value,
//                 password:document.querySelector("#password").value,
//             }
//             fetch("/api/users/login",{
//                 method:"POST",
//                 body:JSON.stringify(userObj),
//                 headers:{
//                     "Content-Type":"application/json"
//                 }
//             }).then(res=>{
//                 if(res.ok){
//                    location.href = "/profile"}})
//         } else {
//             alert("Yikes!")
//         }
//     })
// }) 

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
