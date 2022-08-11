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
                //PREVIENE EL ENVIO POR EL MÉTODO GET DE LOS DATOS, ASÍ NO RECARGA LA CONSOLA.
                event.preventDefault()
                //CAPTURACIÓN DE VALORES.
                const password1 = document.querySelector("#password").value
                const password2 = document.querySelector("#password2").value
                //CUANDO LAS CONTRASEÑAS NO COINCIDAN.
                if (password1 != password2){
                    console.log("Las contraseñas no coinciden")
                    Swal.fire({
                        icon: 'error',
                        title: 'ERROR',
                        text: 'Las contraseñas no coinciden.',
                        footer: 'Ambas contraseñas deben coincidir, ingrésalas nuevamente.'
                      })
                }else{
                    console.log(password1, password2)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Te has registrado éxitosamente.',
                        footer: 'Enseguida te redireccionaremos a la página principal.',
                        showConfirmButton: false,
                        timer: 2500
                      }) 
                }
    
                           
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
