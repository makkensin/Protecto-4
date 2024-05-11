


import  './hamMenu.css'

export const hamMenu = () => {

  
  const header = document.querySelector('#header');

  const divHam = document.createElement('div');
  divHam.className ='div-ham';
  const imgHam = document.createElement('img');
  imgHam.src = './assets/hamburger.png';
  imgHam.classList ='ham-img';

  divHam.append(imgHam)
  header.append(divHam)


}