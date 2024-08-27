document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('contenedor_texto_entrada');
    const textarea2 = document.getElementById('contenedor_texto_salida');
    const encriptar_boton = document.querySelector('#boton_encriptar'); 
    const desencriptar_boton = document.querySelector('#boton_desencriptar'); 
    const boton_copiar = document.querySelector('#boton_copiar');
    const imagen = document.querySelector('.imagen');
    const mensaje = document.querySelector('.texto_salida_alerta');

    function encriptar(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function desencriptar(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    encriptar_boton.addEventListener('click', () => {
        const texto = textarea.value;
        const textoEncriptado = encriptar(texto);
        console.log('Texto encriptado:', textoEncriptado);
        textarea2.value = textoEncriptado;
        imagen.style.display = 'none';
        mensaje.style.display = 'none';
    });

    desencriptar_boton.addEventListener('click', () => {
        const texto = textarea.value;
        const textoDesencriptado = desencriptar(texto);
        console.log('Texto desencriptado:', textoDesencriptado);
        textarea2.value = textoDesencriptado;
    });
    
    boton_copiar.addEventListener('click', () => {
        navigator.clipboard.writeText(textarea2.value)
            .then(() => console.log('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar el texto: ', err));
    });
});