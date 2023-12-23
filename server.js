const express = require('express')
const app = express() // parentheses means we're using express and storing it inside of the variable 'app'
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //sends file via response.  wherever the file that's running is located, that's where we start to look for it
}) //set up server to hear request and generate response on main route /

app.get('/api/:rapperName'/*user can put in rapper name, : shows it's a query parameter*/, (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase() //will pull rapper name off query parameter

    if(rappers[rappersName]){/*grabs object and uses key, so if 21 savage exists in rappers object*/
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
   // response.json(rappers) //send json of rappers variable/object
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`);
})