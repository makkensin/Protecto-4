

import { fieldForm, textarea, boton} from '../../UTILS/fieldForm';
import './contact.css'


export const contact = () =>{

  const main = document.querySelector('main');
  main.innerHTML = '';
  const bigContact = document.createElement('section');
  bigContact.id = 'contact-us';
  const form = document.createElement('form');
  form.id = 'email-form';
  form.addEventListener('submit', submit)
  form.innerHTML = `
  ${fieldForm({labelText:'Email', className:'email'})}
  ${fieldForm({labelText:'Nombre', className:'nombre'})}
  ${fieldForm({labelText:'Apellido', className:'apellido'})}
  ${fieldForm({labelText:'Telefono', className:'telefono'})}
  ${textarea({labelText:'Contenido', className:'content', rows:'6'})}
  ${boton({text:'Enviar'})}
  
  `
  
  const boxDerecha = document.createElement('div');
  boxDerecha.id = 'box-derecha';

   const contact = document.createElement('div');
   contact.id = 'contact'
   const conInfo = document.createElement('h3');
   conInfo.textContent = 'Contact Info';

  
   const contactBox = document.createElement('div');
   contactBox.classList = 'contact-box';


   const locatContact = document.createElement('div')
   const locatImg = document.createElement('img');
   locatImg.src = 'assets/location.png';
   const locatText = document.createElement('p');
   locatText.textContent = 'Palma de Mallorca';
   
   locatContact.append(locatImg,locatText)
   contactBox.append(locatContact)
   
   const mailContact = document.createElement('div');
   const mailImg = document.createElement('img');
   mailImg.src = 'assets/mail.png';
   const mailText = document.createElement('p');
   mailText .textContent = 'makkensin@gmail.com';

   mailContact.append(mailImg,mailText)
   contactBox.append(mailContact)


   const phoneContact = document.createElement('div');
   const phoneImg = document.createElement('img');
   phoneImg.src = 'assets/phone.png';
   const phoneText = document.createElement('p');
   phoneText .textContent = '+34 618224603';

  const googleContact = document.createElement('div');
  googleContact.id = 'google-contact';
  const iframe = document.createElement('iframe');
  iframe.src = 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9075.81067109028!2d2.6592024364196982!3d39.57172521531107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979259c61ac757%3A0xc40d5406c3d058c6!2sPalma%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1716864099813!5m2!1ses!2ses" ;


  phoneContact.append(phoneImg,phoneText)
  contactBox.append(phoneContact)
  
  contact.append(conInfo,contactBox)
  googleContact.append(iframe)
  boxDerecha.append(contact,googleContact)
  
   bigContact.append(form,boxDerecha);
   main.append(bigContact);
  
  
  
}

const submit = (e) =>{
  e.preventDefault()
  const [email,nombre,apellido,telefono,content] = e.target
  console.log(email.value);
  console.log(nombre.value);
  console.log(apellido.value);
  console.log(telefono.value);
  console.log(content.value);
}