const listaTarefas = document.getElementById('lista-tarefas'); // ul
const botaoCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const itemLista = document.getElementsByClassName('item-tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoApagaFinalizados = document.getElementById('remover-finalizados');
const botaoSalvar = document.getElementById('salvar-tarefas');
const lista = listaTarefas.childNodes;
const botaoApagaSelecionado = document.getElementById('remover-selecionado');
const botaoCima = document.getElementById('mover-cima');
const botaoBaixo = document.getElementById('mover-baixo');

// Requisito 7 e 8: Ajuda obtida com o Guilherme Azevedo
function selecionaTarefa(event) {
  for (let i = 0; i < itemLista.length; i += 1) {
    itemLista[i].classList.remove('selecionado');
    itemLista[i].style.backgroundColor = 'turquoise';
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

// Requisito 10
function apagaLista() {
  for (let i = lista.length; i > 0; i -= 1) {
    if (listaTarefas.childNodes) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
  }
}

botaoApagaTudo.addEventListener('click', apagaLista);

// Requisito 11
function apagaCompletos() {
  const feitos = document.querySelectorAll('.completed');
  for (let i = 0; i < feitos.length; i += 1) {
    feitos[i].parentNode.removeChild(feitos[i]);
  }
}

botaoApagaFinalizados.addEventListener('click', apagaCompletos);

// Requisito 12 - Ajuda obitida com o Thiago Zardo
function salvaLista() {
  localStorage.setItem('itemLista', listaTarefas.innerHTML);
  // console.log(localStorage.getItem('itemLista'));
}

botaoSalvar.addEventListener('click', salvaLista);

window.onload = function carregaLista() {
  listaTarefas.innerHTML = localStorage.getItem('itemLista');
  for (let i = 0; i < itemLista.length; i += 1) {
    itemLista[i].addEventListener('click', selecionaTarefa);
    itemLista[i].addEventListener('dblclick', addRiscaTarefa);
  }
};

// Requisito 13 - Método encontrado na documentação Mozilla e implementada com a ajuda do Imar Mendes
// https://developer.mozilla.org/en-US/docs/Web/API/Element/before
// https://developer.mozilla.org/en-US/docs/Web/API/Element/after
function moverParaCima() {
  const listaFilhos = listaTarefas.childNodes;
  for (let i = 1; i < listaFilhos.length; i += 1) {
    if (listaFilhos[i].classList.contains('selecionado')) {
      listaFilhos[i].after(listaFilhos[i - 1]);
    }
  }
}

botaoCima.addEventListener('click', moverParaCima);

function moverParaBaixo() {
  const listaFilhos = listaTarefas.childNodes;
  for (let i = 0; i < listaFilhos.length - 1; i += 1) {
    if (listaFilhos[i].classList.contains('selecionado')) {
      listaFilhos[i].before(listaFilhos[i + 1]);
      return;
    }
  }
}

botaoBaixo.addEventListener('click', moverParaBaixo);

// Reqisito 14
function apagaSelecionado() {
  const selecionado = document.querySelector('.selecionado');
  selecionado.parentNode.removeChild(selecionado);
}

botaoApagaSelecionado.addEventListener('click', apagaSelecionado);
