console.log('JS is sourced!');

function onReady() {
    getList()
}
onReady()
//get function
function getList() {
    axios({
        method: 'GET',
        url: '/todos'
    })
    .then((response) => {
        console.log('got the list: ', response.data)
        // ! render function to put list onto DOM
        //render function when created 
        renderToDo(response.data)
    })
    .catch((error) => {
        console.log('ERROR in GET list...', error)
        alert(error)
    })
}
// post funtion next
function addToDo(event) {
    console.log('in add to do event');
    event.preventDefault()
    const newToDo = {
        text: document.getElementById("toDo").value,
        isComplete: false }
    console.log('adding to do', newToDo);
    axios({
        method: 'POST',
        url: '/todos',
        data: newToDo
    })
    .then((response) => {
        console.log('posting data: ', response.data)
        document.getElementById("toDo").value = ''
        getList()
    })
    .catch((error) => {
        console.log('ERROR in POST /todo', error)
        alert(error)
    })
}
function renderToDo(toDoList) {
    const toDoTableBody = document.getElementById('toDoList');
toDoTableBody.innerHTML = ''
for (let toDo of toDoList) {
    let completeButton = 'not completed'
    if (toDo.isComplete) {
        completeButton = "completed"
    }
    toDoTableBody.innerHTML+=(` <tr  data-testid="toDoItem">
        <td>${toDo.text}</td>
        <td class="completed"><button 
        data-testid="completeButton" 
        data-id="${toDo.id}"
        onClick="updateStatus(${toDo.id},${toDo.isComplete})">${completeButton}</button></td>
        <td><button data-testid="deleteButton" onClick="deleteToDo(${toDo.id})">DELETE</button></td>
      </tr>
        
        `)
}
}