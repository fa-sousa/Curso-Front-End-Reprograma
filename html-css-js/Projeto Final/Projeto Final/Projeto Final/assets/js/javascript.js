

function emiteTeste(ev) {
    ev.preventDefault();
    var perguntas = $(this).serializeArray();
    var totalDePerguntas = 26;
    var numerosDeSim = 0;
    for (var index = 0; index < perguntas.length; index++) {
        var pergunta = perguntas[index];
        var questao = pergunta.name;
        var resposta = pergunta.value;

        if (resposta == "Sim")
            numerosDeSim++;
        
    }
    var numeroConsumista = 18;
    if (numerosDeSim >= numeroConsumista) {
        alert("Você é uma compradora compulsiva. Busque ajuda! ⛔");
    } else{
        alert("❗ Você é muito consumista. Fique alerta! ❗");
    }

}

$("#formulario").submit(emiteTeste);