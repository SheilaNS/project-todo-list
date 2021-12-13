// Requisito 5
const listaTarefas = document.getElementById('lista-tarefas');
const botaoCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');

function criaTarefa() {
  const tarefaItem = document.createElement('li');
  tarefaItem.className = 'item-terefa';
  tarefaItem.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefaItem);
  textoTarefa.value = '';
}

botaoCriar.addEventListener('click', criaTarefa);
