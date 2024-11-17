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
        text: document.getElementById("toDO"),
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