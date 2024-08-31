document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const Ainput = document.getElementById('Ainput');
    const list = document.getElementById('list');

    addBtn.addEventListener('click', () => {
        const text = Ainput.value.trim();
        if (text) {
            addTodoItem(text);
            todoInput.value = '';
        }
    });

    Ainput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span id="item-text">${text}</span>
            <button id="edit-button">Edit</button>
            <button id="delete-button">Delete</button>
        `;

        const editButton = li.querySelector('#edit-button');
        const deleteButton = li.querySelector('#delete-button');

        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your to-do item:', text);
            if (newText !== null && newText.trim() !== '') {
                li.querySelector('#item-text').textContent = newText.trim();
            }
        });

        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        list.appendChild(li);
    }
});