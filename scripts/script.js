function handleClick(){
    const cep = document.querySelector('#cep').value
    if(cep == ""){
        alert('Preencha o campo de CEP!')
        return                     
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
method:'GET'})
.then(response => response.json())  
.then(data =>{

    const resultElement = document.querySelector('#result')
    const dataFormatted = (`${data.logradouro}, ${data.complemento}, ${data.bairro}. ${data.localidade} - ${data.uf}`)
    resultElement.innerHTML = dataFormatted
})           
}

//Evento feito para quando clicar no enter, rodar a função
document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        handleClick();
    }
});