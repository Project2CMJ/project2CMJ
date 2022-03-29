const loginFormHandler = async(event) => {
event.preventDefault();

// Collect values from the login form
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page

        console.log(response)
        let result = await response.json()
        console.log(result)
        if (result.user.role_id = 2) {
            document.location.replace('/profile');
        } else if (result.user.role_id = 1) {
            document.location.replace('/admin');

        };
    } else {
        alert(response.statusText);
    }
}
};

}
}).then(res => {
if (res.ok) {
    const userObj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.href = "/profile"
        }
    })
} else {
    alert("Yikes!")
}
})
}) *
/

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);