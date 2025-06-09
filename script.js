function adicionarTarefa() {
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim(); // remove espaços em branco
  let mensagemElemento = document.getElementById("mensagem");
  let listaTarefas = document.getElementById("listaTarefas");

  if (tarefa === "") {
    mensagemElemento.textContent = "Não há tarefas. Favor adicionar uma tarefa.";
    return; // interrompe a função
  }

  let novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;

  listaTarefas.appendChild(novaTarefa);
  mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
  inputTarefa.value = "";
}