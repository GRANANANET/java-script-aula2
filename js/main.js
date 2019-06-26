//Função para gerar elementos no DOM
  var totalPizzas = [];
  function gerarPizza () {
  	var contadorPizzas = document.querySelector('#total-pizzas')
	var containerpizzas = document.querySelector('#container-pizzas');
	// <li></li>
	var pizza = document.createElement('li');
	//<img>
	pizza.className = "list-inline-item";
	var pizzaImg = document.createElement('img');

	pizzaImg.setAttribute('src', 'imgs/images.jpg');
	pizzaImg.className = "borda-redonda";

	//<li>
	//  <img src="...">
	//</li>
	pizza.appendChild(pizzaImg);
	containerpizzas.appendChild(pizza);
	
	// Adicionando as pizzas no array
	totalPizzas.push(pizza);
	var numeroPizzas = totalPizzas.length
	contadorPizzas.innerHTML = numeroPizzas;
}
//Coletando o Botao
  var botao = document.querySelector("button");
// Gerqndo pizzaz no evento onclick
  botao.onclick = function(){
  	gerarPizza();
  }