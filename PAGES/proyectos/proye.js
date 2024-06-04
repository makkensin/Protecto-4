


import { allProyects, componentProyect  } from "../../UTILS/dataProjects";
import './proye.css'

export const proyect = () =>{

  
const main = document.querySelector('main')
  main.innerHTML = '';
  const proyectsSection = document.createElement('section');
  proyectsSection.id = "proyects";
  
  
  allProyects.forEach(proyecto => {
    const proyectoHTML = componentProyect(proyecto);
  
    const proyectoDiv = document.createElement('div');
    proyectoDiv.classList.add('proyect-wrapper');
    proyectoDiv.innerHTML = proyectoHTML;
    proyectsSection.appendChild(proyectoDiv);
  });
  
 
  main.appendChild(proyectsSection);
 


}