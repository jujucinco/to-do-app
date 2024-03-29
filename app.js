window.onload = function() {
    alert("The window has loaded!");
    onReady();
};

function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let title = newToDoText.value;

        let newLi = document.createElement('li');

        let checkbox = document.createElement('input');

        checkbox.type = "checkbox";

        let deleteBtn = document.createElement('button');

        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener('click', function(event){

          toDoList.removeChild(this.parentElement);
        })

        
        newLi.textContent = title;

        newLi.appendChild(checkbox);

        newLi.appendChild(deleteBtn);

        toDoList.appendChild(newLi);

        newToDoText.value = '';

        
    });

}
