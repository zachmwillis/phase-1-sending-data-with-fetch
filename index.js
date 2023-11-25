// Add your code here
function submitData(name, email) {
    const userInfo = {
        name: name,
        email: email
    };
  
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => {
        const userId = data.id;
        document.body.innerHTML += `<p>${userId}</p>`;
    })
    .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
    });
}