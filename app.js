const express = require('express')
const path = require("path")
const Canvas = require("canvas")
const app = express()
const port = process.env.PORT || 5000

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
    
    c = Canvas.createCanvas(9999, 100)
    ctx = c.getContext("2d")

    jokeWidth = ctx.measureText(joke).width
    jokeHeight = ctx.measureText(joke).height

    tmp = parseInt(jokeWidth * 1.1)

    console.log(jokeWidth, tmp, jokeHeight, joke)


    c.width = parseInt(jokeWidth * 3.1)
    // c.height = parseInt(jokeHeight * 1.1)

    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.font = "24pt Calibri"
    ctx.fillText(joke, c.width / 2, c.height / 2)

    return c.toBuffer("image/png")
}