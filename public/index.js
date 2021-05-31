import { Todo } from './modules/todo.js';
let todo_array = [];
const all_todos = localStorage.allTodos;
if (all_todos) {
    todo_array = [...JSON.parse(all_todos)];
}
else {
    localStorage.setItem('allTodos', JSON.stringify(todo_array));
}
const subject = document.querySelector('#subject');
const description = document.querySelector('textarea');
const when = document.querySelector('#todo_time');
const todo_form = document.querySelector('#todo_form');
const todo_list = document.querySelector('#todo_list');
const uid = Math.floor(Math.random() * 100);
const getDetails = () => {
    const todo = new Todo(uid, subject.value, description.value, when.value);
    return todo.getClassOject();
};
todo_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mytodo = getDetails();
    todo_array.push(mytodo);
    localStorage.setItem('allTodos', JSON.stringify(todo_array));
    refresh();
});
const mytodo_list = JSON.parse(localStorage.allTodos);
if (mytodo_list) {
    if (mytodo_list.length > 0) {
        const my_todo_list = JSON.parse(localStorage.allTodos).map((todo) => {
            return `
            <li class="todo_list">
              <h2>${todo.subject}</h2>
              <h4>${todo.description}</h4>
              <hr>
              <h6>${todo.date}</h6>
            </li><br/>
            `;
        });
        todo_list.innerHTML += my_todo_list;
    }
    else {
        todo_list.innerHTML = 'All Your Todos will Appear Here';
    }
}
else {
}
const refresh = () => {
    if (mytodo_list) {
        if (mytodo_list.length > 0) {
            const my_todo_list = JSON.parse(localStorage.allTodos).map((todo) => {
                return `
                <li class="todo_list">
                  <h2>${todo.subject}</h2>
                  <h4>${todo.description}</h4>
                  <hr>
                  <h5>${todo.date}</h5>
                </li><br/>
                `;
            });
            todo_list.innerHTML = my_todo_list;
        }
        else {
            todo_list.innerHTML = 'All Your Todos will Appear Here';
        }
    }
    else {
    }
};
setInterval(refresh, 1000);
