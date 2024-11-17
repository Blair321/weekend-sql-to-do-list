console.log('JS is sourced!');

function onReady() {
    
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