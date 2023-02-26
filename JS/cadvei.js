let btn = document.querySelector('#btn-cadvei');
btn.addEventListener('click', function(){
    let placa = document.querySelector('#placaVeiculo').value;
    if(placa ===""){
        alert('CAMPO OBRIGATÓRIO')
    } else {
        alert('CADASTRO REALIZADO')
    }
});