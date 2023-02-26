async function getAdvice(){
    let resposta = await fetch ("https://api.adviceslip.com/advice")
    console.log(resposta);

    let data = await resposta.json();
    console.log(data);
    document.querySelector("#advice").innerHTML = data.slip.advice;

}

let btnAdvice = document.querySelector("#get-advice");
btnAdvice.addEventListener('click', function(){
    getAdvice();
});
   



