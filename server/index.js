const express = require('express')
const path = require('path')

const app = express()


app.use(express.static("public"))
// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/main.js'))
//   })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})