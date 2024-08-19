function mostrarAlerta() {
    alert('Hola');
}
    function mostrarAlertaDiv() {
        alert('Hola! Soy el div');
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const boton = document.querySelector('button');
        const contenedorDiv = document.querySelector('.boton-container');
        contenedorDiv.addEventListener('click', mostrarAlertaDiv);
    });