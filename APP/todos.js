// criando variaveis com os elementos basicos da DOM
var listElement = document.querySelector('#app ul'); 
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos'))||[]; // pega os valores do storage, converte e caso não tenha nenhum valor retorno um array vazio para evitar erros

function renderTodos() {
    listElement.innerHTML = ''; // apaga todos os todos da página para não ficar replicando
    for(todo of todos) { // função for específica para arrays onde o primeiro irá percorrer todos elementos do segundo
        
        var todoElement = document.createElement('li'); // criando elemento li lista
        var todoText = document.createTextNode(todo); // criando texto  de acordo com o array todo
        var linkElement = document.createElement('a'); // criando elemento a para link

        linkElement.setAttribute('href' , '#'); // definindo atributo 

        var pos = todos.indexOf(todo); // criando variavel para detectar as posições de cada array
        linkElement.setAttribute('onclick' , 'deleteTodo(' + pos +')'); // definindo elemento com ação ao ser clicado - chamar a função delete com concatenação de string
        var linkText = document.createTextNode(' Excluir '); // criando texto para o link

        linkElement.appendChild(linkText);// colocando linkText dentro de linkElement

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos(); // executar a função ao iniciar

function addTodo(){ //criação da função de add novo todo na lista
    var todoText = inputElement.value; // pegar o valor no input e armazenar na variável

    todos.push(todoText); // pegar todoText e colocar dentro do array todos
    inputElement.value = ''; // limpar o campo do input
    renderTodos(); //executar a função para aparecer o novo elemento add
    saveToStorage(); // executa a função de gravar na storage

}

buttonElement.onclick = addTodo; // criando açãod e click no botão para executar a função aaTodo

function deleteTodo(pos) { // criando a função de deletar passando a variavel pos como referencia
    todos.splice(pos, 1); // remove de uma determinada posição  , uma quantidade de itens
    renderTodos(); //executar a função para aparecer a lista sem o elemento deletado
    saveToStorage(); // executa a função de gravar na storage
}

function saveToStorage(){ // criando a função de gravar na storage
    localStorage.setItem('list_todos', JSON.stringify(todos)); // cria um local com o nome list_todos na storage e converte atraves do JSON a array em lista para armazenar os elementos da arreay todos

}