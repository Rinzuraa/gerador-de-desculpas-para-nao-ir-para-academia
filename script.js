const gerador = document.getElementById("gerador");
const som = document.getElementById("TCHARAM");

gerador.addEventListener("click", function (geradordefrases) {
  var frases = [
    "Minha roupa de academia se rebelou e fugiu do varal",

    "Descobri que meu horóscopo diz pra evitar suor hoje",

    "Tô treinando pra ser o campeão mundial de Netflix",

    "Meu gato sabotou meu tênis com uma bola de pelo",

    "Confundi o horário e achei que era dia de descanso",

    "Tô preservando energia pra discutir no X depois",

    "A gravidade tá mais forte hoje, não dá pra levantar",

    "Minha playlist de treino foi sequestrada pelo Spotify e sem ela não rola",

    "Tô em uma missão secreta pra testar o sofá",

    "O universo me mandou um sinal pra comer pizza hoje",
  ];

  var numerodafrase = Math.floor(Math.random() * frases.length);

  som.play().catch((error) => {
    console.error("Erro ao tocar o som:", error);
  });

  var frasealeatoria = frases[numerodafrase];

  document.getElementById("displaydafrase").innerHTML = frasealeatoria;

  console.log(frasealeatoria);
});
