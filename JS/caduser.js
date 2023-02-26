let btnCadUser = document.querySelector("#btnCadUser");
btnCadUser.addEventListener("click", function(){
 
    let inputValor = document.querySelector('#cadUser').value;
    if (inputValor === "") {
        alert('CAMPOS OBRIGATÓRIOS')
    } else {
        alert('USUÁRIO CADASTRADO')
    }

    inputValor = document.querySelector('#cadUser').value = "";

  });