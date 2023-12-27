const express = require('express') // imported express from node modules
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(
        `<h1>99 Little Bugs in the Code</h1>
        <a href="/98">take one down patch it around</a>`)
})

app.get('/:number_of_bugs', (req, res) => {
    let bugs = req.params.number_of_bugs
    if (bugs <= 0) {
        res.send(
                `<h1>0 Bugs Left</h1>
                <a href="/">Start Over</a>`)
    } else {
    res.send(
        `<h1>${bugs} Little Bugs in the Code</h1>
        <a href=${bugs - 1}>take one down patch it around</a>`        
        )  }
})

app.listen(3000, () => {
    console.log("I'm ready")
})