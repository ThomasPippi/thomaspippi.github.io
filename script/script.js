function funcao(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
    var email = document.getElementById("email");
    if(nome.value != '' && email.value != ''){
    alert("Obrigado, " + nome.value + ", entraremos em contato através de: " + email.value);
    }
    else{
        alert("Preencha todos os Campos!");
    }
}

    