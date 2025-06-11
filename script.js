function adicionarTarefa() {
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  let mensagemElemento = document.getElementById("mensagem");
  let listaTarefas = document.getElementById("listaTarefas");

  if (tarefa === "") {
    mensagemElemento.textContent = "Não há tarefas. Favor adicionar uma tarefa.";
    return;
  }

  // Criar <li>
  let novaTarefa = document.createElement("li");
  novaTarefa.classList.add("tarefa-item");

  // Criar texto da tarefa
  let textoTarefa = document.createElement("span");
  textoTarefa.classList.add("texto-tarefa");
  textoTarefa.textContent = tarefa;

  // Criar bolinha
  let bolinha = document.createElement("span");
  bolinha.classList.add("status-bolinha");

  bolinha.addEventListener("click", () => {
    bolinha.classList.toggle("finalizada");
    textoTarefa.classList.toggle("riscado");
  });

  // Criar botão de deletar
  let botaoDeletar = document.createElement("button");
  botaoDeletar.classList.add("botao-deletar");
  botaoDeletar.innerHTML = "🗑️";

  botaoDeletar.addEventListener("click", () => {
    novaTarefa.remove();
  });

  botaoDeletar.addEventListener("click", () => {
  novaTarefa.remove();
  mensagemElemento.textContent = "Tarefa excluída com sucesso!";
});

  // Criar div para bolinha + deletar
  let acoes = document.createElement("div");
  acoes.classList.add("acoes-tarefa");
  acoes.appendChild(bolinha);
  acoes.appendChild(botaoDeletar);

  // Montar tarefa
  novaTarefa.appendChild(textoTarefa);
  novaTarefa.appendChild(acoes);
  listaTarefas.appendChild(novaTarefa);

  mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
  inputTarefa.value = "";
}