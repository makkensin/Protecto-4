


import './logo.css'


export const printLogos = () => {

 const header = document.querySelector('#header');
 header.id = 'header';
 header.classList = 'flex-container';
 const logos = document.createElement('div');
 logos.className = 'logos';
 logos.classList.add('flex-container');
 const logo = document.createElement('img');
 logo.src = './assets/logo.png';
 logo.className = 'logo-img';
 const nombre = document.createElement('p')
 nombre.className = 'logo-text'
 nombre.textContent = 'makkeDev.';



 logos.append(logo, nombre)
 header.append(logos)


}

