const todoList = [{
   name: 'make dinner', 
   dueDate: '2024-4-11'
}, {
   name: 'wash dishes',
   dueDate: '2024-4-11'
}];

renderTodoList();

function renderTodoList() { 
// to update html we need to run all this code again every time we add todo hence we created new funct, so we can reuse it.
   let todoListHTML = '';
   todoList.forEach((todoObject, index) => { 
         //const name = todoObject.name;
         //const dueDate = todoObject.dueDate;
         //the line here is too long to write so we have shortcut for object called destructuring.
         const { name, dueDate } = todoObject
         const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-button
            js-delete-todo-button">Delete</button>         
         `;
   //instead of writing html by hand in html div element we looped through an array and we generated html using js.
         todoListHTML += html;
   });
   
   document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;

   document.querySelectorAll('.js-delete-todo-button')//this list works like an array so we can use for each method to loop it
      .forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
               renderTodoList();
         })
      });
   //feature is called a closure if a function has access to a value it will always have access to that value, the value like index gets packaged together or enclosed with the function that's why we call it a closure.    
}   

document.querySelector('.js-add-todo-button')
   .addEventListener('click', () => {
      addTodo();
   });

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value

   todoList.push({
      //name: name,
      //dueDate: dueDate,
      name, // shorthand property syntax
      dueDate // shorthand property syntax
   });

   inputElement.value = ''; // this will make the text in the textbox empty after adding todos

   renderTodoList();
}