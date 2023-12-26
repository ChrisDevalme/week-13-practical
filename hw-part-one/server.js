const express = require('express') // imported express from node modules
const jsxEngine = require('jsx-view-engine')
const app = express()


app.use(express.urlencoded({ extended: true }))

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name} It's great to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.tipPercentage)/100
    let total = parseInt(req.params.total)
    res.send(`${total*tip}`)
    
})


app.listen(3000, () => {
    console.log("I'm ready")
})