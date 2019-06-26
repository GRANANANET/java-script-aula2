//Função para gerar elementos no DOM
  function gerarPizza () {
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
}
//Coletando o Botao
  var botao = document.querySelector("button");
// Gerqndo pizzaz no evento onclick
  botao.onclick = function(){
  	gerarPizza();
  }