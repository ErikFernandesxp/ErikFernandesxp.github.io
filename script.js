// Animação de digitação
// Quis deixar o site mais legal, então fiz um texto aparecendo como se estivesse sendo digitado
const texto = "Sou estudante da universidade Jorge Amado, estou aprendendo os primeiros passos no mundo do desenvolvimento web.";
let i = 0;

function digitar() {
  // Enquanto ainda tiver letra pra mostrar, ele vai adicionando uma por uma no h3
  if (i < texto.length) {
    document.getElementById("animado").textContent += texto.charAt(i);
    i++;
    // Espera 50 milissegundos e chama a função de novo, criando o efeito de digitação
    setTimeout(digitar, 50);
  }
}

// Quando a página carrega, a função digitar já começa
window.onload = digitar;

// Alternância de tema
// Esse aqui é o botão que troca entre modo escuro e claro (bem útil!)
const botaoTema = document.getElementById("botao-tema");
let modoEscuro = true; // Começa no escuro

// Quando clicar no botão, vai trocar o modo do site
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro"); // Ativa ou desativa o modo claro
  modoEscuro = !modoEscuro; // Troca a variável pra saber em qual modo tá
  // Muda o texto do botão conforme o tema atual
  botaoTema.textContent = modoEscuro ? "Modo Escuro" : "Modo Claro";
});
