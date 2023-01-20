const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext('2d')

const logo = document.getElementById("logo")

const bgImage = new Image()
bgImage.src = "../images/bg.png"

const fabyImage = new Image()
fabyImage.src = "../images/flappy.png"

const topPipeImage = new Image()
topPipeImage.src = "../images/obstacle_top.png"

const bottomPipeImage = new Image()
bottomPipeImage.src = "../images/obstacle_bottom.png"

let pipesIntervalId 
let animationLoopId

const faby = {
  x: 0,
  y: 0,
  width: 0, 
  height: 0, 
  speedX: 0,
  speedY: 0, 
  gravity: 0, 
  gravitySpeed: 0, 
  update: function () {


  },
  newPosition: function() {

  }
}
class Pipe {
  constructor() {

    this.sharedX = 900

    this.spaceBetween = 200

    this.topPipeX = 0
    this.topPipeY = 0

    this.bottomPipeX = this.sharedX
    this.bottomPipeY = 200 + (Math.round(Math.random() *400))

  


  }
  update() {
      this.bottomPipeX = this.bottomPipeX-2
  }

  draw() {

    ctx.drawImage(bottomPipeImage, this.bottomPipeX, this.bottomPipeY)
  }
}

let pipesArray = []
  
function generatePipes() {
  pipesIntervalId = setInterval(() => {
    pipesArray.push(new Pipe())
    console.log("Pipes:", pipesArray)
  }, 3750)
  }

  function animationLoop() {
    animationLoopId = setInterval(() => {

      ctx.clearRect(0,0,1200,600)
    
      ctx.drawImage(bgImage, 0, 0, 1200, 600)

    ctx.drawImage(fabyImage, 400, 200, 75, 50)

    for (let i = 0; i< pipesArray.length; i++) {
      pipesArray[i].update()
      pipesArray[i].draw()
    }
    }, 16)
  }

  
function startGame() {

    console.log("Starting")

    logo.style.visibility = "hidden"
    logo.style.height = "0px"
    canvas.width = "1200"
    canvas.height = "600"
    canvas.style.visibility = "visible"

    ctx.drawImage(bgImage, 0, 0, 1200, 600)

    ctx.drawImage(fabyImage, 400, 200, 75, 50)

    for (let i = 0; i< pipesArray.length; i++) {
      pipesArray[i].draw()
    }

    animationLoop()
    generatePipes()
  }


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};
