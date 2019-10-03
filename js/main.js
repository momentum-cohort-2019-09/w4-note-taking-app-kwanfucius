
function basicAuthCreds(username, password) {
    return 'Basic ' + btoa(`${username}:${password}`)
}

let credentials = {
    username: "kwanfucius",
    password: "password"
}

// fetch('https://notes-api.glitch.me/api/users', {
//     method: 'POST',
//     headers: {
//         'username': 'stephen',
//         'password': 'password'
//     }
// })
//     .then(response => {
//         if (response.ok) {
//             console.log("received response")
//             console.log(response)
//         }
//     })
function getNotes() {
    fetch('https://notes-api.glitch.me/api/notes', {
        headers: {
            'Authorization': basicAuthCreds(credentials.username, credentials.password)
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data["notes"][0].text)
        })
}

function addNote() {
    fetch('https://notes-api.glitch.me/api/notes', {
        method: 'POST',
        body: JSON.stringify({ 'text': 'test' }),
        headers: {
            'Authorization': basicAuthCreds("kwanfucius", "password"),
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                console.log("received response")
                console.log(response)
            }
        })
}

getNotes()
let credentials = {
    username: 'rbproject',
    password: 'test'
}
function basicAuthCreds(username, password) {
    return 'Basic ' + btoa(`${username}:${password}`)
}
fetch('https://notes-api.glitch.me/api/notes', {
    headers: {
        'Authorization': basicAuthCreds(credentials.username, credentials.password)
    }
})
    .then(response => response.json())
    .then(data => {
        const pastNotes = document.querySelector('.past-notes')
        console.log(data[“note”][0].text)
    }
    )