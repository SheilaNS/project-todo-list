const listaTarefas = document.getElementById('lista-tarefas');
const botaoCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const itemLista = document.getElementsByClassName('item-tarefa');

// Requisito 7 e 8: Ajuda obtida com o Guilherme Azevedo
function selecionaTarefa(event) {
  for (let i = 0; i < itemLista.length; i += 1) {
    itemLista[i].classList.remove('selecionado');
    itemLista[i].style.backgroundColor = 'white';
  }
  const evento = event.target;
  evento.classList.add('selecionado');
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Requisito 9
function addRiscaTarefa(event) {
  const risca = event.target;
  const item = document.querySelector('.selecionado');
  if (item.classList.contains('completed')) {
    risca.classList.remove('completed');
  } else if (!item.classList.contains('completed')) {
    risca.classList.add('completed');
  }
}

// Requisito 5
function criaTarefa() {
  const tarefaItem = document.createElement('li');
  tarefaItem.className = 'item-tarefa';
  tarefaItem.innerText = textoTarefa.value;
  tarefaItem.addEventListener('click', selecionaTarefa);
  tarefaItem.addEventListener('dblclick', addRiscaTarefa);
  listaTarefas.appendChild(tarefaItem);
  textoTarefa.value = '';
}

botaoCriar.addEventListener('click', criaTarefa);
