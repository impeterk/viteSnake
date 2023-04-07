import { setupCounter } from "./score";

export function addOne(number: number) {
  return number + 1
}
export function styleCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext("2d") as CanvasRenderingContext2D

  const snakeHead = 30
  let snakeSpeed = 3;
  let snakeY = element.height / 2 - snakeHead / 2;
  let snakeX = element.width / 2 - snakeHead;

  // gameLoop

  function gameLoop() {
    drawAssets()
    // moveSnake()
    addOne(1)
    requestAnimationFrame(gameLoop)
  }

  //  movement

  function moveSnake() {
    snakeX += snakeSpeed
    if (snakeX > element.width) {
      snakeX = 0
    }
  }
  function drawAssets() {
    drawRectangle('#e5e7eb', 0, 0, element.width, element.height)
    drawRectangle('#030712', snakeX, snakeY, snakeHead, snakeHead)
  }
  function drawRectangle(color: string, startX: number, startY: number, endX: number, endY: number) {

    ctx.fillStyle = color
    ctx.fillRect(startX, startY, endX, endY)
  }


  gameLoop()
} 
