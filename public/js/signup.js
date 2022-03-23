/*
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        username:document.querySelector("#name-signup").value,
        email:document.querySelector("#email-signup").value,
        password:document.querySelector("#password-signup").value,
    }
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            const userObj={
                email:document.querySelector("#email").value,
                password:document.querySelector("#password").value,
            }
            fetch("/api/users/login",{
                method:"POST",
                body:JSON.stringify(userObj),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>{
                if(res.ok){
                   location.href = "/profile"}})
        } else {
            alert("Yikes!")
        }
    })
}) 
*/