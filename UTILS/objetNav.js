



export const elementNav = (ul, text, ruta) => {
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
    
 li.append(a);
 ul.append(li);

}
