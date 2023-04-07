import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'
import { styleCanvas } from './canvas'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex w-full justify-around">
    <a href="https://vitejs.dev" target="_blank" >
      <img src="${viteLogo}" class="h-32 aspect-square" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="h-32 aspect-square" alt="TypeScript logo" />
    </a>
  </div>
      <button id="counter" type="button"></button>
      <canvas id="canvas" class="border-sky-700 border-4" width="600xp" height="600px"></canvas>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
styleCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!)
