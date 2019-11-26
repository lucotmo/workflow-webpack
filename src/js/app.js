import css from '../scss/main.scss'
import logoLucotmo from '../images/lucotmo-logo.png'
import LucotmoSvg from '../images/lucotmo.svg'
import LucotmoPng from '../images/lucotmo.png'

const page = `
  <main class="Main">
    <div class="Main-logo">
      <img src=${logoLucotmo} alt="lucotmo">
    </div>
    <h2 class="Main-title">Workflow Webpack</h2>
  </main>
`
// Routes images
document.querySelector("meta[name='msapplication-TileImage']").content = `${LucotmoSvg}`
document.querySelector("link[rel='apple-touch-startup-image']").href = `${LucotmoSvg}`
document.querySelector("link[rel='icon']").href = `${LucotmoPng}`
document.querySelector("link[rel='apple-touch-icon']").href = `${LucotmoSvg}`

document.getElementById('root').innerHTML = page
