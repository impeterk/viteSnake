
export function styleCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext("2d") as CanvasRenderingContext2D

  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, 30, 30)
} 
