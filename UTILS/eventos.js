






export const eventos =()=>{
  
  const divham = document.querySelector('.div-ham');
  divham.addEventListener('click', () =>{
    const side = document.querySelector('#side-nav');
    side.classList.toggle('close')
  })
  
}


// const sideNav = document.querySelector('#open');
// sideNav.classList.toggle('side-nav');


// if (side.className='close') {
//   side.classList.remove('close')
//   side.classList.add('side-nav','flex-column')
// }else if(side.className ='side-nav'){
// side.classList.remove('side-nav','flex-column')
// side.classList.add('close')
// }