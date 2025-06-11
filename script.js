function adicionarTarefa() {
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  let mensagemElemento = document.getElementById("mensagem");
  let listaTarefas = document.getElementById("listaTarefas");

  if (tarefa === "") {
    mensagemElemento.textContent = "Não há tarefas. Favor adicionar uma tarefa.";
    return;
  }

  // Criar elementos
  let novaTarefa = document.createElement("li");
  novaTarefa.classList.add("tarefa-item");

  let textoTarefa = document.createElement("span");
  textoTarefa.classList.add("texto-tarefa");
  textoTarefa.textContent = tarefa;

  let bolinha = document.createElement("span");
  bolinha.classList.add("status-bolinha");

  // Alterna status ao clicar
bolinha.addEventListener("click", () => {
  bolinha.classList.toggle("finalizada");
});

  // Adicionar ao item
  novaTarefa.appendChild(textoTarefa);
  novaTarefa.appendChild(bolinha);
  listaTarefas.appendChild(novaTarefa);

  mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
  inputTarefa.value = "";
}