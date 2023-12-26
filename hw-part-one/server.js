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

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    const randomResponse = Math.floor(Math.random() * magicResponses.length)
    res.send(`<h1>${magicResponses[randomResponse]}</h1>`)
})



app.listen(3000, () => {
    console.log("I'm ready")
})