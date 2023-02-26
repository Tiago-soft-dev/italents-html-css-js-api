let btnAdd = document.querySelector('#addBotao');
btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('.input').value;
  if (inputValor === "") {
    alert('CAMPOS OBRIGATÓRIOS!')
  } else {
    alert('LOGIN REALIZADO!')
    window.location.replace("./02_menus.html");
  }

  document.querySelector('.input').value = "";
  

  });


// // CADASTRO USUARIO

// let btnCadUser = window.document.querySelector('#btncadUser');
// btnCadUser.addEventListener("click", function(){
//   let inpUser = window.document.querySelector('#cadUser').value;
//   if (inpUser === "") {
//     alert('CAMPOS OBRIGATÓRIOS')
//   } else {
//     alert('USUÁRIO CADASTRADO')
//   }
// })

