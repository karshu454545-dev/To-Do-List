let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodo();
    function addTodo() {
      let inputElement = document.querySelector('.js-name-input');
      let name = inputElement.value;
      let dateElement = document.querySelector('.js-date-input');
      let dueDate = dateElement.value;
      if (name === '' || dueDate === '') {
        return;
      }
      todoList.push({
        name, dueDate
      });
      localStorage.setItem('todoList', JSON.stringify(todoList));
      console.log(todoList);
      inputElement.value = '';
      dateElement.value='';
      renderTodo();
    }
    function renderTodo() {
      let todoHTML = '';
      for (let i = 0; i < todoList.length; i++) {
        let taskObject = todoList[i];
        let { name, dueDate } = taskObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
          <button onclick="
          todoList.splice(${i}, 1);
          localStorage.setItem('todoList', JSON.stringify(todoList));
          renderTodo();
          " class="delete-button">Delete</button>
          `;
        todoHTML += html;
      }
      document.querySelector('.display').innerHTML = todoHTML;
    }
    