const botao = document.getElementById("botao-passa");
const frase = document.getElementById("incentivo1");
console.log(botao);
botao.addEventListener("click", () => {
  frase.style.display = "none";
});
