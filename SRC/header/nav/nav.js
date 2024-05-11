

import { objetLinks } from '../../../UTILS/objetLinks';
import { elementNav } from '../../../UTILS/objetNav';
import './nav.css'


export const printNav = () => {

  const header = document.querySelector('#header');
  const nav = document.createElement('nav');
  nav.classList = 'nav';
  nav.classList.add('flex-container');
  const ul = document.createElement('ul');
  ul.classList = 'ul';
  ul.classList.add('flex-container')

 for (const link of objetLinks) {
   
    elementNav(ul, link.text, link.hrefs);
 }

nav.append(ul)
header.append(nav)


}


