import css from './scss/main.scss'
import logoLucotmo from './img/lucotmo-logo.png'

const page = `
  <main class="Main">
    <h2 class="Main-title">Hola Mundo con Vanilla JS, Webpack, & Sass</h2>
    <i class="fa fa-smile-o"></i>
    <div class="Main-logos">
      <img src=${logoLucotmo}>
    </div>
  </main>
`

document.getElementById('root').innerHTML = page

console.log(
  'Código del bundle index.js con Vanilla JS'
)