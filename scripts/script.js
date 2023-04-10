function handleClick(){
    const resultElement = document.querySelector('#result')
    resultElement.innerHTML = ""

    const cep = document.querySelector('#cep').value
    if(cep == ""){
        alert('Preencha o campo de CEP!')
        return                     
    }
    document.getElementById("loader").style.display = "block"


    setTimeout(() => {
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    method:'GET'})
    .then(response => response.json())  
    .then(data =>{
    
        const dataFormatted = (`${data.logradouro}, ${data.bairro}. ${data.localidade} - ${data.uf}`)
        document.getElementById("loader").style.display = "none"
        resultElement.innerHTML = dataFormatted
    })           

    }, 2000);

}

//Evento feito para quando clicar no enter, rodar a função
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        handleClick();
    }
});