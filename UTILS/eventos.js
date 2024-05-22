






export const eventos =()=>{
  
  const divham = document.querySelector('.div-ham');
  divham.addEventListener('click', () =>{
    const side = document.querySelector('#side-nav');
    side.classList.toggle('close')
  })
  
}

