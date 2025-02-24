const todos = [
    {
        label: "Buy Milk"
    },
    {
        label: "Do Assignment"
    }
];

function addTodo(todo) {
    const todosListEl = document.querySelector("#todos");
    const todoItemEl = document.createElement("li");
    todoItemEl.textContent = todo.label;
    todosListEl.appendChild(todoItemEl);
}

document.addEventListener("DOMContentLoaded", () => {
    for (const todo of todos) {
        addTodo(todo)
    }
    document.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputEl = document.querySelector("input[name='label']");
        const todo = {
            label: inputEl.value
        };
        todos.push(todo);
        addTodo(todo);
        event.target.reset();
    });

    // document.querySelectorAll(".alert-me").forEach((el) => {
    //     el.addEventListener("click", (event) => {
    //         alert("I am clicked");
    //     });
    // });
});