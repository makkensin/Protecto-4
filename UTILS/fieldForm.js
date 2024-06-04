



export const fieldForm = ({ labelText, className}) =>{
  return`
      <div>
        <label>${labelText}</label>
        <input class="field-form ${className}">
      </div> 
  `
}


export const textarea = ({labelText, className, rows}) =>{
 return`
      <div>
        <label>${labelText}</label>
        <textarea class="field-form ${className}" rows="${rows}"></textarea> 
      </div>
 `
}

export const boton = ({text}) =>{

  return`
     <div>
       <button>${text}</button>
     </div>
 `

}