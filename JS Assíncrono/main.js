   // REQUISIÇÃO AJAX

/*var xhr =  new XMLHttpRequest(); // criando um 'objeto' para pegar uma API

xhr.open('GET', 'https://api.github.com/users/ThFramos'); // pegando os valores da API
xhr.send(null); // enviando null como parametro, por enquanto!!!

xhr.onreadystatechange = function () { // criando uma funçaõ de espera
    if (xhr.readyState === 4) { // 4 é o valor de que os dados foram carregados
        console.log(JSON.parse(xhr.responseText)); // assim que carregados, será mostrado aprtir da conversão de JSON em objeto ou vertice
    }
}

*/

// PROMISES
/*
var minhaPromises =function () {
    return new Promise(function(resolve,reject) {
        var xhr =  new XMLHttpRequest(); // criando um 'objeto' para pegar uma API

xhr.open('GET', 'https://api.github.com/users/ThFramos'); // pegando os valores da API
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){
        if (xhr.status === 200) { // código de requisição OK - resolve
            resolve(JSON.parse(xhr.responseText));
        } else {
            reject('Erro na requisição'); // enviar erro caso a requisição não for requetida com sucesso - reject
        }
    }
}
});
    
}

minhaPromises() // para não haver problema de sincronissida, o promises permite criar o .then e o .catch 
    .then(function(response){ // caso a unção de requisição esteja ok, será chamado o .then - resolve
        console.log(response);
    })
    .catch(function(error){ // caso contrario o .catch - reject
        console.warn(error);
    })

    */

    // AXIOS
    /*
    axios.get('https://api.github.com/users/ThFramos') // com o AXIOS ele executa o XML de forma encapsulada e masi fácil de codar, além de já fazer conversão do JSON.
    .then(function(response){ 
        console.log(response);
    })
    .catch(function(error){ 
        console.warn(error);
    })
    */

   let partes = ['ombros', 'joelhos']; 
   let letra = ['cabeça', ...partes, 'e', 'dedos'];
   console.log(letra);