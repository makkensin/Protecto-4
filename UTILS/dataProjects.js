



export const allProyects = [
  {
    titulo:'Proyecto 1',
    descripcion:'Replica web de renfe con html y css',
    link: 'https://github.com/makkensin/proyecto-1.git',
    live:'https://magenta-parfait-4704e4.netlify.app',
    image:'/assets/renfe.png'
  },
  {
    titulo:'Proyecto 2',
    descripcion:'Replica coches.net',
    link: 'https://github.com/makkensin/Proyecto2.git',
    live:'https://cochesnet.netlify.app',
    image:'/assets/cochesnet.png'
  },
  {
    titulo:'Proyecto 3',
    descripcion:'Replica pinterest',
    link: 'https://github.com/makkensin/Proyecto-3.git',
    live:'https://makkepinterest.netlify.app',
    image:'/assets/pinterest.png'
  },
  {
    titulo:'Proyecto 4',
    descripcion:'Calculadora Grid',
    link: 'https://github.com/makkensin/calculator-GRID.git',
    live: 'https://calculatdora.netlify.app',
    image:'/assets/calculadora.png'
  },

];




export const componentProyect = (proyecto) =>{

  const {titulo, descripcion, link, live, image} = proyecto
  return`
  <div class='proyect'>
  <img class="proyect-image" src="${image}" alt="${titulo}">
  <div class="proyect-content">
    <h3 class="proyect-title">${titulo}</h3>
    <p class="proyect-description">${descripcion}</p>
    <p class="proyect-links">
      <a href="${link}" target="_blank" class="proyect-link">Repositorio</a>
      <a href="${live}" target="_blank" class="proyect-link">Demo en vivo</a>
    </p>
  </div>
</div>
  
  
  `
}
