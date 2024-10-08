const form = document.getElementById('form-valid');
let numeroA = document.getElementById('first-number');
let numeroB = document.getElementById('second-number');

function validaNumero(numberA, numberB){
    const validacao = numberA < numberB;
    return validacao;
}

form.addEventListener('submit', function(e){
e.preventDefault();

    let formValido = false;

    formValido = validaNumero(numeroA.value,numeroB.value)
    if (!formValido){
        document.querySelector('.error-message').style.display = 'block';
    } else {
        document.querySelector('.sucess-message').style.display = 'block';
    
    }
});