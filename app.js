
function onReady(){
    const addToDoForm = document.getElementById('addToDoForm');
    let toDos = [];
    let id = 0;

    function renderTheUI(){

        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';

        toDos.forEach(function(toDo){
            const NEW_LI = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const DELETE_BTN = document.createElement('button');
            DELETE_BTN.textContent = 'Delete!';

            DELETE_BTN.addEventListener('click', event => {
                toDos = toDos.filter(function(item){
                    return item.id !== toDo.id;
            })
            renderTheUI();
        })
            

            

            NEW_LI.textContent = toDo.title;

            toDoList.appendChild(NEW_LI);
            NEW_LI.appendChild(checkbox);
            NEW_LI.appendChild(DELETE_BTN);
            
        })
    }

    function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value){return; }
    toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id
    });

    id++;

    newToDoText.value= '';
    renderTheUI()
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });
        renderTheUI();
    
}

    window.onload = function() {
        onReady();
    };