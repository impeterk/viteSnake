export function setupCounter(element: HTMLButtonElement, newValue: number) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + newValue))
  setCounter(0)
}
