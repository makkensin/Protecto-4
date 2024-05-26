

import { objetSkills } from '../../UTILS/objetSkills';
import './skills.css'



export const skill = () =>{
  
  const main = document.querySelector('main');
  main.innerHTML = '';
  const skillSection = document.createElement('section');
  skillSection.className = 'skill';
  
   for (const skill of objetSkills) {
       const lista = document.createElement('li');
       const h3 = document.createElement('h3');
       h3.textContent = skill.text
       const span1 = document.createElement('span');
       span1.classList = skill.clase1
       const span2 = document.createElement('span');
       span2.classList = skill.clase2

       
       skillSection.append(lista)
       span1.append(span2)
       lista.append(h3,span1)
       main.append(skillSection)
   }
}
