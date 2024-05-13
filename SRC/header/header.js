
import './header.css'
import { printLogos } from './logo/logo';
import { hamMenu } from './menu/hamMenu';
import { printNav } from './nav/nav';
import { printSideMenu } from './sideMenu/sideMenu';


export const header = () => {
  printLogos()
  printNav()
  hamMenu()
  printSideMenu()
};






