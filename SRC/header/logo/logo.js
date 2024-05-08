

import './logo.css'


export const printLogos = () => {

const body = document.querySelector('body');
const app = document.querySelector('#app')
 const header = document.querySelector('header');
 header.id = 'header';
 const logos = document.createElement('div');
 logos.className = 'logos';
 const logo = document.createElement('img');
 logo.src = './assets/logo.png';
 logo.className = 'logo-img';
 const nombre = document.createElement('p')
 nombre.className = 'logo-text'
 nombre.textContent = 'makkeDev';


 logos.append(logo, nombre)
 header.append(logos)
 app.append(header)
 body.append(app)

}

