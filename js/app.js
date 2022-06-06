document.addEventListener('DOMContentLoaded',function(){
    modalGaleria();
});

function modalGaleria(){
    const modalImg = document.querySelector('#modal-imagen');
    if(modalImg){
        modalImg.addEventListener('show.bs.modal',(e)=>{
            const enlace = e.relatedTarget;
            const rutaImagen = enlace.getAttribute('data-bs-img');
            
            //construyendo la imagen
            const imagen = document.createElement('IMG');
            imagen.src = `/img/${rutaImagen}.jpg`;
            imagen.classList.add('img-fluid');
            imagen.alt = "img galeria";
    
            const contentModal = document.querySelector('.modal-body');
            contentModal.appendChild(imagen);
    
        });
    
        modalImg.addEventListener('hidden.bs.modal',(e)=>{
            console.log("ocultando imagen");
    
            const contentModal = document.querySelector('.modal-body');
            contentModal.textContent = '';
    
        });
    }
}

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
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()