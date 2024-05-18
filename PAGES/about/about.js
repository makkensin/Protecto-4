

import './about.css'


export const aboutMe = () =>{

   const main = document.querySelector('main');


  const mainSection = document.createElement('section');
  mainSection.classList.add('main-section');
  const leftSection = document.createElement('div');
  leftSection.classList.add('left-section')

  const parraf1 = document.createElement('p')
  parraf1.textContent ='Hi, I´m Jorge'
  const parraf2 = document.createElement('p')
  parraf2.textContent = 'I´M A WEB DEVELOPER'
  const parraf3 = document.createElement('p')
  parraf3.textContent = 'I would like to apply my knowledge and skills in your company, and I am convinced that I can add value to your team of programmers. I am willing to learn and develop professionally, and I am confident that I can contribute to the success of your company.'

  
  const rigthSection = document.createElement('div');
  rigthSection.classList.add('rigth-section');
  const aboutDivImg = document.createElement('div');
  aboutDivImg.classList.add('about-div-img');
  const aboutImage = document.createElement('img');
  aboutImage.src = '/assets/imagen.jpg'
  const rigthSectionText = document.createElement('div');
  rigthSectionText.classList.add('rigth-section-text')
  const video = document.createElement('video')
  video.src ='/assets/smoke.mp4';
  video.autoplay = 'false';
  video.muted = 'true';
  const h1 = document.createElement('h1');

 const nombre= "MAKKE.DEV";
 const newNombre = nombre.split('');
 for (let i = 0; i < newNombre.length; i++) {
  const element = newNombre[i];
  const span = document.createElement('span')
  span.textContent = element

  h1.append(span)
  rigthSectionText.append(video,h1)

}

aboutDivImg.append(aboutImage)
rigthSection.append(aboutDivImg,rigthSectionText)

leftSection.append(parraf1,parraf2,parraf3)
mainSection.append(leftSection,rigthSection)
main.append(mainSection)

}
