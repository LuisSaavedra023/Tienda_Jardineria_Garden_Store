//CAPTURA DE VALORES.
const nameField = document.querySelector("#name")
const lastNameField = document.querySelector("#last_name")
const emailNameField = document.querySelector("#email")
const passwordNameField = document.querySelector("#password")
const password2NameField = document.querySelector("#password2")
const userNameField = document.querySelector("#username")

// FUNCIÓN QUE VALIDARÁ QUE LOS CAMPOS CONTENGAN INFORMACIÓN.
const validateEmptyField = (message,event) => {
  const field = event.target
  const fieldValue = event.target.value
  
  //VALIDACIÓN DE EL CAMPO CONTENGA CARACTÉRES, SE ELIMINAN LOS ESPACIOS.
  if (fieldValue.trim().length === 0){
    //SE REMUEVE EL COLOR DEL CAMPO VÁLIDO.
    field.classList.remove("field_valid");
    //INSERCIÓN DE LA CLASE CREADA EN CSS PARA RESALTAR EL BORDE DEL CAMPO
    field.classList.add("field_invalid");
    //SE REMUEVE EL COLOR DEL TEXTO VÁLIDO.
    field.nextElementSibling.classList.remove("text_valid")
    // SE DESTACA DE COLOR EL AVISO BAJO DEL CAMPO.
    field.nextElementSibling.classList.add("text_invalid")
    //INSERCIÓN DE ALARMA EN LA ETIQUETA SIGUIENTE DEL INPUT(SPAN).
    field.nextElementSibling.innerText = message
  }else{
    //SI EL CAMPO NO ESTÁ VACIO SE QUITA LA CLASE DE TEXTO INVÁLIDO.
    field.classList.remove("field_invalid");
    //SE AGREGA LA CLASE QUE DESTACA EL CAMPO.
    field.classList.add("field_valid");
    //REMOCIÓN DE LA CLASE DEL COLOR DE TEXTO INVÁLIDO.
    field.nextElementSibling.classList.remove("text_invalid");
    //SE DESTACA DE COLOR VÁLIDO EL AVISO.
    field.nextElementSibling.classList.add("text_valid")
    //ELIMINACIÓN DEL TEXTO ERROR.
    field.nextElementSibling.innerText = "Bien!"
  }
}
//FUNCIÓN QUE VALIDARÁ EL DOMINIO DEL CORREO ELECTRÓNICO.
const validateEmailFormat = event =>{

  const field = event.target
  const fieldValue = event.target.value
  //SE INGRESA LA EXPRESIÓN REGULAR PARA VALIDAR EL EMAIL.
  const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  //VALIDACIÓN DE EL CAMPO SI CONTIENE MENOS DE 5 CARÁCTERES Y EL CORREO ELECTRÓNICO NO TIENE EL FORMATO ESPERADO.
  if (!regex.test(fieldValue)){
    //SE REMUEVE EL COLOR DEL CAMPO VÁLIDO.
    field.classList.remove("field_valid");
    //INSERCIÓN DE LA CLASE CREADA EN CSS PARA RESALTAR EL BORDE DEL CAMPO
    field.classList.add("field_invalid");
    //SE REMUEVE EL COLOR DEL TEXTO VÁLIDO.
    field.nextElementSibling.classList.remove("text_valid")
    // SE DESTACA DE COLOR EL AVISO BAJO DEL CAMPO.
    field.nextElementSibling.classList.add("text_invalid")
    //INSERCIÓN DE ALARMA EN LA ETIQUETA SIGUIENTE DEL INPUT(SPAN).
    field.nextElementSibling.innerText = "Por favor, ingresa un correo de electrónico válido."
  }else{

  }
  
}
//LLAMADAS A LOS CAMPOS CON EL PARÁMETRO BLUR QUE CAPTURA LOS MOVIMIENTOS DEL CURSOR, SE PASA POR PARÁMETRO LA FUNCIÓN QUE CONTIENE COMO PARÁMETRO EL EVENTO, ÉSTA FUNCIÓN RETORNA LA FUNCIÓN QUE VALIDA LOS CAMPOS Y ESTA RECIBE COMO PARÁMETRO EL EVENTO Y EL MENSAJE ASOCIADO A CADA CAMPO.
nameField.addEventListener("blur", (event) => validateEmptyField("Ingresa tu nombre.",event));
lastNameField.addEventListener("blur", (event) => validateEmptyField("Ingresa tu apellido.",event));
emailNameField.addEventListener("blur", (event) => validateEmptyField("Ingresa tu email.",event));
passwordNameField.addEventListener("blur", (event) => validateEmptyField("Ingresa tu contraseña.",event));
password2NameField.addEventListener("blur", (event) => validateEmptyField("Confirma tu contraseña.",event));
userNameField.addEventListener("blur", (event) => validateEmptyField("Selecciona tu usuario.",event));
//CUANDO EL EMAIL HAGA UN EVENTO DE TIPO INPUT
emailNameField.addEventListener("input",validateEmailFormat)

//function (event){
//   //TARGET CAPTURA EL VALOR DEL CAMPO.
//   //CAPTURACIÓN DEL VALOR DE INPUT
//   const field = event.target
//   const fieldValue = event.target.value
  
//   //VALIDACIÓN DE EL CAMPO CONTENGA CARACTÉRES.
//   if (fieldValue.length === 0){
//     //INSERCIÓN DE LA CLASE CREADA EN CSS PARA RESALTAR EL BORDE DEL CAMPO
//     field.classList.add("field_invalid");
//     //field.classList.add("text_invalid");
//     //INSERCIÓN DE ALARMA EN LA ETIQUETA SIGUIENTE DEL INPUT(SPAN).
//     field.nextElementSibling.innerText = "Ingresa el nombre"
//   }else{
//     //SI EL CAMPO NO ESTÁ VACIO SE QUITA LA CLASE.
//     //field.classList.remove("invalid");
//     field.classList.add("field_valid");
//     //field.classList.add("text_valid");
//     //ELIMINACIÓN DEL TEXTO ERROR.
//     field.nextElementSibling.innerText = "Bien!"
//   }
// })
// console.log(nameField,LastNameField,EmailNameField,passwordNameField,password2NameField,userNameField)

// const formulario = document.querySelector("form") 

// //CREACIÓN DEL EVENTO
// formulario.addEventListener("submit", validarFormulario)

// //CREACIÓN DE LA FUNCIÓN
// function validarFormulario(event){
//   event.preventDefault()
//   const nombre = document.querySelector("#name").value
//   const apellido = document.querySelector("#last_name").value
//   const email = document.querySelector("#email").value
//   const password1 = document.querySelector("#password").value
//   const password2 = document.querySelector("#password2").value
//   const usuario = document.querySelector("#username").value

//   //EXPRESIÓN REGULAR DE VALIDACIÓN DE CORREO.
//   let regExpr = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
//   let emailOk = regExpr.test(email);
//   //CUANDO EL CORREO SEA ERRÓNEO.
//   if (emailOk === false){
//     console.log("correo incorrecto")
//     Swal.fire({
//       icon: 'error',
//       title: 'ERROR',
//       text: 'El correo ingresado es inválido.',
//       footer: 'Por favor verifica que el dominio del correo sea el correcto.'
//     })
//     //respuestaEmail.textContent = 'El correo ingresado no es válido.'
//   }else{
//         //CUANDO LAS CONTRASEÑAS NO COINCIDAN.
//         if (password1 != password2){
//           console.log("error de correo " + emailOk)  
//           //console.log("Las contraseñas no coinciden")
   
//         Swal.fire({
//             icon: 'error',
//             title: 'ERROR',
//             text: 'Las contraseñas no coinciden.',
//             footer: 'Ambas contraseñas deben coincidir, ingrésalas nuevamente.'
//           })
//         }else{
//             console.log(password1, password2)
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Te has registrado éxitosamente.',
//                 footer: 'Enseguida te redireccionaremos a la página principal.',
//                 showConfirmButton: false,
//                 timer: 2500
//               }) 
//           }
//   }
//   console.log(nombre)  
//   console.log(apellido)  
//   console.log(email)  
//   console.log(password1)
//   console.log(password2)
//   console.log(usuario)
// }

