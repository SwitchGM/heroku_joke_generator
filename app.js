const express = require('express')
const app = express()
const port = process.env.PORT | 5000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/example-image.png")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})