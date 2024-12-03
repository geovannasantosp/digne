function openModal() {
    document.getElementById("doacao-modal").style.display = "flex";  // Usando 'flex' para centralizar o modal
}

function closeModal() {
    document.getElementById("doacao-modal").style.display = "none";
}

function selecionarValor(valor) {
    document.getElementById("valor-doacao").value = valor;
}

function confirmarDoacao() {
    const valor = document.getElementById("valor-doacao").value;
    if (valor && valor > 0) {
        alert(`Obrigado por sua doação de R$${valor}!`);
        closeModal();  // Fecha o modal após a doação
    } else {
        alert("Por favor, insira um valor válido para a doação.");
    }
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("doacao-modal");
    if (event.target === modal) {
        closeModal();
    }
}

// Abre o modal de assinatura
function openAssinaturaModal() {
    document.getElementById('assinatura-modal').style.display = 'block';
}

// Fecha o modal de assinatura
function closeAssinaturaModal() {
    document.getElementById('assinatura-modal').style.display = 'none';
}

let planoSelecionado = null;

// Seleciona o plano e exibe a descrição
function selecionarPlano(tipo, valor) {
    planoSelecionado = { tipo, valor };
    const descricao = tipo === 'mensal' 
        ? `Você escolheu o plano Mensal por R$${valor} por mês.` 
        : `Você escolheu o plano Anual por R$${valor} por ano.`;
    document.getElementById('plano-descricao').textContent = descricao;
}

// Confirma a assinatura
function confirmarAssinatura() {
    if (planoSelecionado) {
        alert(`Obrigado por assinar o plano ${planoSelecionado.tipo.toUpperCase()}! Valor: R$${planoSelecionado.valor}.`);
        closeAssinaturaModal();
    } else {
        alert('Por favor, selecione um plano para continuar.');
    }
}
