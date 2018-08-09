//essa é uma função ficticia para demonstrar a sintaxe de uma função.

function receitaDeBolo () {
	var ovos = 2;
	var farinha = 1;
	var nutella = 1;
	var bolo;

	if (ovos > 0 && farinha > 0 && nutella > 0) {
		var bolo = ovos + farinha + nutella;
		// a linha acima resultaria no valor 4 (soma de todas as variáveis).
		// outra solução possível seria:
		//alert("Misture todos os ingredientes e coloque no forno");
	} else {
		alert("O bolo não deu certo");
	}

};

receitaDeBolo();
