let btnCadFac = document.querySelector('#btn-cadfac');
 

btnCadFac.addEventListener('click', function(){
    let nomefaccao = document.querySelector('#nome-faccao').value;     
    if (nomefaccao ==="") {
        alert('CAMPO NOME OBRIGATÓRIO')
    } else {
        alert('CADASTRO REALIZADO')
    }

});