const express = require('express')
const { createCanvas } = require("canvas")
const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/example-image.png")
    res.send("Hello darkness")
    // data = createImage()
    // img = Buffer.from(data, "base64")
    // res.writeHead(
    //     200, {
    //         "Content-Type": "image/png",
    //         "Context-Length": img.length
    //     }
    // )
    // res.end(img)
})

function createImage() {
    c = createCanvas(100, 100)
    ctxt = c.getContext("2d")
    ctxt.fillStye = "#123123"
    ctxt.fillRect(0, 0, 50, 50)
    return c.toBuffer("image/png")
}