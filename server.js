'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3000

let total = 0

function getNameFromObject({ name }) {
	return name
}

function lieToMe ({ name }) {
  return `You're beautiful ${name}`
}

function wrapInHTML (str) {
  return `<h1>${str}</h1>`
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + "/public/static/index.html")	
})

app.post('/', (req, res, next) => {
  // res.setHeader('Content-Type', 'text/plain')

  console.log(req)
  // console.log(`Checking req.query: ${req.query}`)

  // console.log(wrapInHTML(lieToMe(getNameFromObject(req.query))))
  // res.send(wrapInHTML(lieToMe(getNameFromObject(req.query))))
})


app.get('/test', (req, res, next) => {
	res.setHeader('Content-Type', 'text/plain')
	// console.log(req)
	console.log(`Checking req.query: ${req.query}`)

	// let recievedData = JSON.stringify(req.query, null, 2)

	console.log(`Recieved name: ${getNameFromObject(req.query)}`)
	res.send(`Recieved name: ${getNameFromObject(req.query)}`)
})

app.post('/test', (req, res, next) => {
  console.log(req)

  console.log('POST recieved')
  res.send('POST recieved')
})

app.listen(PORT, () => {
  console.log('App is listening on port: ' + PORT)
})
