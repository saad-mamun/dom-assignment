document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Function to create a new to-do item
    function createTodoItem(text) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit to-do item:', span.textContent);
            if (newText) {
                span.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    // Add button click handler
    addButton.addEventListener('click', () => {
        const text = inputField.value.trim();
        if (text) {
            const todoItem = createTodoItem(text);
            todoList.appendChild(todoItem);
            inputField.value = '';
        }
    });

    // Handle Enter key in the input field
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
