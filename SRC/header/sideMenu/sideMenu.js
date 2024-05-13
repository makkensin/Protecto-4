

import { objetLinks } from '../../../UTILS/objetLinks';
import { elementNav } from '../../../UTILS/objetNav';
import './sideMenu.css'



export const printSideMenu = () => {

  const header = document.querySelector('#header');
  const sideNav = document.createElement('nav');
  sideNav.id = 'open';
  sideNav.classList = 'side-nav';
  sideNav.classList.add('flex-column');
  const ulSide = document.createElement('ul');
  ulSide.classList = 'ul-side';
  ulSide.classList.add('flex-column')

 for (const link of objetLinks) {
   
    elementNav(ulSide, link.text, link.hrefs);
 }

 sideNav.append(ulSide)
 header.append(sideNav)



}