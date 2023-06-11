//Popup cadastro
let fundopopup = document.getElementById("popup-overlay");
let popup = document.getElementById("popup");
let btncadastroTarefa = document.getElementById("btncadastro-tarefa");
let btnvoltar = document.getElementById("btnvoltar")

btncadastroTarefa.addEventListener("click", openPopup);
btnvoltar.addEventListener("click", closePopup);

let btnenviotarefa = document.getElementById("enviar-tarefa");
btnenviotarefa.addEventListener("click", function(event) {
  if (validarFormulario()) {
    salvaTarefa(event);
    closePopup();
  } else {
    event.preventDefault();
  }
});



function openPopup() {
  popup.classList.add("open-popup");
  fundopopup.classList.add("popup-overlay-fundo");
}

function closePopup() {
  popup.classList.remove("open-popup");
  fundopopup.classList.remove("popup-overlay-fundo");
}



// Salvar tarefa
function salvaTarefa(event) {
  event.preventDefault();

  var desctarefa = document.getElementById("tarefa").value;
  var data = document.getElementById("data").value;
  var profissao = document.getElementById("profissao").value;

  // Recupera as tarefas existentes do localStorage
  let tarefas = JSON.parse(localStorage.getItem('tarefa')) || [];

  // Adiciona a nova tarefa ao array
  tarefas.push({
    desctarefa: desctarefa,
    data: data,
    profissao: profissao
  });

  // Salva o array de tarefas no localStorage
  localStorage.setItem('tarefa', JSON.stringify(tarefas));

 
  CriadorCard();
  console.log('Tarefa salva com sucesso:', tarefas);

    // Limpa os campos do formulário após o envio
    document.getElementById("tarefa").value = "";
    document.getElementById("data").value = "";
    document.getElementById("profissao").value = "";
}







const listatarefas = document.getElementById("lista-tarefas");

// Função para formatar a data no formato DD/MM/AAAA
function formatarData(data) {
  const partes = data.split("-");
  const dia = partes[2];
  const mes = partes[1];
  const ano = partes[0];
  return `${dia}/${mes}/${ano}`;
}





// Carrega cards ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const tarefas = JSON.parse(localStorage.getItem("tarefa"));
  if (tarefas == null || tarefas.length === 0) {
    return;
  }

  tarefas.forEach(function (tarefa) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-header">
        <h4>${tarefa.desctarefa}</h4>
        <p>Data limite: ${formatarData(tarefa.data)}</p>
        <p>Profissão procurada: ${tarefa.profissao}</p>
      </div>
    `;

    listatarefas.appendChild(card);
  });
});





// Função para criar os cards
function CriadorCard() {
  const tarefas = JSON.parse(localStorage.getItem("tarefa"));
  if (tarefas == null || tarefas.length === 0) {
    return;
  }

  const tarefa = tarefas[tarefas.length - 1];

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-header">
      <h4>${tarefa.desctarefa}</h4>
      <p>Data limite: ${formatarData(tarefa.data)}</p>
      <p>Profissão procurada: ${tarefa.profissao}</p>
    </div>
  `;

  listatarefas.appendChild(card);
}






// Função para validar o formulário
function validarFormulario() {
  var desctarefa = document.getElementById("tarefa").value;
  var data = document.getElementById("data").value;
  var profissao = document.getElementById("profissao").value;

  if (desctarefa.trim() === "" || data.trim() === "" || profissao.trim() === "") {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }

  return true;
}
