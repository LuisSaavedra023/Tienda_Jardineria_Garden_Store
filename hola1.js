// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            //SE EVITA EL MÉTODO GET PARA QUE LA CONSOLA NO SE RECARGUE.
            event.preventDefault()
            //CAPTURACIÓN DE LOS VALORES DE LAS CONTRASEÑAS.
            const password1 = document.querySelector("#password").value
            const password2 = document.querySelector("#password2").value
            //EN CASO QUE LAS CONTRASEÑAS NO COINCIDAN.
            if (password1 != password2){
                console.log("Las contraseñas no coinciden")
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'Las contraseñas no coinciden',
                    footer: 'Ambas contraseñas deben coincidir, por favor vuelve a ingresarlas'
                  })
                
            }else{
                console.log(password1, password2)
            }
            
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//   const formulario = document.querySelector("#formulario_registro")
// //CREAR EL EVENTO SE INTRODUCE EL EVENTO Y LA FUNCIÓN QUE TENDRÁ LOS DATOS.
// formulario.addEventListener("submit",validarFormulario)

// //FUNCIONES.
// function validarFormulario(e){
//     //PREVIENE EL ENVIO POR EL MÉTODO GET DE LOS DATOS, ASÍ NO RECARGA LA CONSOLA.
//     e.preventDefault()
//     const password1 = document.querySelector("#contrasenia").value
//     const password2 = document.querySelector("#confirmar_contrasenia").value
    
//     console.log(password1, password2)
// }