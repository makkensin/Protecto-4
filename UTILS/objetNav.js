



export const elementNav = (ul, text, hrefs) => {
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = text;
  a.href = hrefs;
  

 li.append(a);
 ul.append(li);

}
