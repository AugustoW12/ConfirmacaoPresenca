let firstClick = true;


function reloadPageAfterDelay(){
    setTimeout(() => {
        location.reload();
    }, 3500); // Espera 5 segundos antes de recarregar 
}


// Adiciona um evento de clique ao botão
document.getElementById('botao_enviar').addEventListener('click', function(event) {
    if (firstClick) {
        alert('Finalizado.');
        firstClick = false;
        reloadPageAfterDelay();
    } else {
        document.getElementById('formulario').submit();
    }
});







// Adiciona um evento de submissão ao formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Cria um objeto com os dados do formulario
    const formData = new FormData(this);
    const data = {
        presenca: formData.get('presenca'),
        nome: formData.get('nome')

    };
    
    // Envia os dados para a API do Sheet Monkey
    fetch('https://api.sheetmonkey.io/form/3vSEMhaV7fvCKQvKGwAqLZ', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-agent': 'learning app',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        alert('Enviado com sucesso!');
        this.requestFullscreen();
    })
    .catch(error =>{
        console.error('Erro ao enviar!', error);
    });
});