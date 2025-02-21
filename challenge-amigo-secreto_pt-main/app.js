// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Pega o input
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco

    // Validação: campo vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.'); // Exibe alerta
        return;
    }

    // Validação: nome repetido
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.'); // Exibe alerta
        return;
    }

    amigos.push(nomeAmigo); // Adiciona o nome ao array
    inputAmigo.value = ''; // Limpa o input

    atualizarListaAmigos(); // Atualiza a lista na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear.'); // Validação
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo secreto: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}