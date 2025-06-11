function adicionarTarefa(tarefa = null) {
  let inputTarefa = document.getElementById("inputTarefa");
  let mensagemElemento = document.getElementById("mensagem");
  let listaTarefas = document.getElementById("listaTarefas");

  // Se for tarefa vinda do localStorage, usa ela; senão pega do input
  let nomeTarefa = tarefa || inputTarefa.value.trim();

  if (nomeTarefa === "") {
    mensagemElemento.textContent = "Não há tarefas. Favor adicionar uma tarefa.";
    return;
  }

  // Criar <li>
  let novaTarefa = document.createElement("li");
  novaTarefa.classList.add("tarefa-item");

  // Texto da tarefa
  let textoTarefa = document.createElement("span");
  textoTarefa.classList.add("texto-tarefa");
  textoTarefa.textContent = nomeTarefa;

  // Bolinha de status
  let bolinha = document.createElement("span");
  bolinha.classList.add("status-bolinha");
  bolinha.addEventListener("click", () => {
    bolinha.classList.toggle("finalizada");
    textoTarefa.classList.toggle("riscado");
  });

  // Botão de deletar
  let botaoDeletar = document.createElement("button");
  botaoDeletar.classList.add("botao-deletar");
  botaoDeletar.innerHTML = "🗑️";
  botaoDeletar.addEventListener("click", () => {
    novaTarefa.remove();
    mensagemElemento.textContent = "Tarefa excluída com sucesso!";

    // Remove do localStorage
    let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    let novasTarefas = tarefasSalvas.filter(t => t !== nomeTarefa);
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
  });

  // Agrupando bolinha + lixeira
  let acoes = document.createElement("div");
  acoes.classList.add("acoes-tarefa");
  acoes.appendChild(bolinha);
  acoes.appendChild(botaoDeletar);

  novaTarefa.appendChild(textoTarefa);
  novaTarefa.appendChild(acoes);
  listaTarefas.appendChild(novaTarefa);

  // Salva no localStorage se foi digitada pelo usuário
  if (!tarefa) {
    mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
    let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefasSalvas.push(nomeTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
    inputTarefa.value = "";
  }
}

function carregarTarefasSalvas() {
  let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefasSalvas.forEach(tarefa => adicionarTarefa(tarefa));
}

// Carrega as tarefas assim que a página é aberta
carregarTarefasSalvas();
