let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
    renderToDoList();
    function addToDoList() {
      let toDoElement = document.querySelector('.todo-input');
      let toDoDateElement = document.querySelector('.todo-date');
      let name = toDoElement.value;
      let date = toDoDateElement.value;
      if (name === '' || date === '') {
        if (name === '' && date === '') {
          alert('Please enter Tasks and Due Dates');
          return;
        }
        (name === '') ?
          alert('Please enter a Task') :
          alert('Please enter a due Date')
        return;
      }
      toDoList.push({ name, date, status: false });
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      toDoElement.value = '';
      toDoDateElement.value = '';
      console.log(toDoList);
      renderToDoList();
    }
    function renderToDoList() {
      let taskHtml = '';
      for (let i = 0; i < toDoList.length; i++) {
        let { name, date, status } = toDoList[i];
        let buttonText = status ? 'Done ✅' : 'Click if Done';
        let buttonColor = status ? 'lightgreen' : 'rgb(230, 230, 230)';
        taskHtml += `<div>${name}</div>
         <div>${date}</div> 
          <button onclick="
          toDoList.splice(${i}, 1);
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
          renderToDoList();
          " class="delete-button">Delete</button>
          <button style="background-color: ${buttonColor};" class="task-status-btn" onclick="
          toDoList[${i}].status = !toDoList[${i}].status;
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
          renderToDoList();
          " 
          
          >${buttonText}</button>
          `;
      }
      document.querySelector('.display-tasks').innerHTML = `${taskHtml}`;
    }
