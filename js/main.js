
  function gerarPizza () {
	var containerpizzas = document.querySelector('#container-pizzas');
	// <li></li>
	var pizza = document.createElement('li');
	//<img>
	var pizzaImg = document.createElement('img');

	pizzaImg.setAttribute('src', 'https://source.unsplash.com/200x200/?pizzaria');
	pizzaImg.className = "borda-redonda";

	//<li>
	//  <img src="...">
	//</li>
	pizza.appendChild(pizzaImg);
	containerpizzas.appendChild(pizza);
}
  var botao = document.querySelector("button");

  botao.onclick = function(){
  	gerarPizza();
  }