const express = require('express')
const path = require("path")
const Canvas = require("canvas")
const app = express()
const port = process.env.PORT || 5000
const px = 11;

const { jokes } = require("./jokes.json")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/example-image.png")
    // res.send("Hello darkness")
    data = createImage()
    img = Buffer.from(data, "base64")
    res.writeHead(
        200, {
            "Content-Type": "image/png",
            "Context-Length": img.length
        }
    )
    res.end(img)
})

function fontFile (name) {
    return path.join(__dirname, '/fonts/', name)
}

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createImage() {
    Canvas.registerFont(fontFile("Calibri Regular.ttf"), {family: "Calibri"})
    
    let joke = jokes[randomInt(0, jokes.length - 1)] 
    
    c = Canvas.createCanvas(1000, px*1.3)
    ctx = c.getContext("2d")

    ctx.fillStyle = "black"
    // ctx.textAlign = "center"
    ctx.font = `${px}pt Calibri`
    ctx.fillText(joke, 0, px)

    return c.toBuffer("image/png")
}