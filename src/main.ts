import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { styleCanvas } from './canvas'
import { setupCounter } from './score'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex w-full justify-around m-12">
    <a href="https://vitejs.dev" target="_blank" >
      <img src="${viteLogo}" class="h-32 aspect-square" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="h-32 aspect-square" alt="TypeScript logo" />
    </a>
  </div>
  <div class="m-4">
  <button class="text-3xl text-gray-200" id="score"></button>
  </div>
      <canvas id="canvas" class="border-sky-500 border-8" width="600xp" height="600px"></canvas>
`

styleCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!)
setupCounter(document.querySelector<HTMLButtonElement>("#score")!, 5)
