const user = {
    username: "bob",
    password: 'test'
};

function isLoggedIn() {
    const session = JSON.parse(localStorage.getItem("session"));
    console.log(session);
    if (session && session.username === "bob") document.body.classList.add("logged-in");
    return session;
}

function logout() {
    localStorage.removeItem("session");
    document.body.classList.remove("logged-in");
}

document.addEventListener("DOMContentLoaded", () => {
    const session = isLoggedIn();
    if(session) document.querySelector("form#profile input[name='username']").value = session.username;
    document.addEventListener("submit", (event) => {
        event.preventDefault();
        console.dir(event.target);
        if (event.target.id === "login") {
            const username = event.target.querySelector("input[name='username']").value;
            const password = event.target.querySelector("input[name='password']").value;
            if (user.username === username && user.password === password) {
                localStorage.setItem("session", JSON.stringify({username}));
                isLoggedIn();
            } else {
                alert("Incorrect Login Info!");
            }
        } else if (event.target.id === "profile") {

        }
    });
    document.querySelector("#logout").addEventListener("click", () => {
        logout();
    });
    document.querySelector("form#profile input[name='username']").addEventListener("input", (event) => {
        const username = event.target.value;
        localStorage.setItem("session", JSON.stringify({username}));
    });
});