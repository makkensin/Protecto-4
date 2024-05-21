
import { aboutMe } from './PAGES/about/about';
import { header } from './SRC/header/header'
import { eventos } from './UTILS/eventos';
import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
    <header id="header"></header>
    <main id="main">
    </main>
    <footer></footer>
`

header();
aboutMe();
eventos();
