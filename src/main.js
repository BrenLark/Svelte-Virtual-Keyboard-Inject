import './app.css'
import App from './App.svelte'

let target = document.createElement('div')
target.setAttribute("id","virtualKeyboardSvelte")
const app = new App({
  target: target,
})

document.body.append(target)

export default app
