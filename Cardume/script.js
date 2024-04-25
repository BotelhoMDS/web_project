function scrollToTop(event) {
    event.preventDefault(); 
    window.scrollTo({ //rola a página para o topo
        top: 0,
        behavior: 'smooth' 
    });
}

function setupFormValidation() { // Eventos do formulario de cadastro
    const form = document.getElementById('formulario_usuario');
    const confirmationContainer = document.getElementById('caixa2');
    const thankYouContainer = document.getElementById('caixa3');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('nome').value;
        const birthdate = document.getElementById('nascimento').value;
        const cpf = document.getElementById('cpf').value;
        const motivation = document.getElementById('motivo').value;

        const confirmationMessage = `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Data de Nascimento:</strong> ${birthdate}</p>
            <p><strong>CPF:</strong> ${cpf}</p>
            <p><strong>Motivação:</strong> ${motivation}</p>
        `;

        document.getElementById('verificacao').innerHTML = confirmationMessage;
        document.getElementById('caixa1').style.display = 'none';
        confirmationContainer.style.display = 'block';
    });

    document.getElementById('confirmar').addEventListener('click', function() {
        const name = document.getElementById('nome').value;

        const confirmationMessage = `
            <h2>Seja bem vinda(o) ${name}!</h2>
            
        `;

        document.getElementById('retorno').innerHTML = confirmationMessage;

        confirmationContainer.style.display = 'none';
        thankYouContainer.style.display = 'block';
    });

    document.getElementById('corrigir').addEventListener('click', function() {
        confirmationContainer.style.display = 'none';
        document.getElementById('caixa1').style.display = 'block';
        document.getElementById('nome').value = '';
        document.getElementById('nascimento').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('motivo').value = '';
    });
}


setupFormValidation();

// Pega o elemento com o id 'begining' para que eu posso aplicar a função scrollToTop
const logo = document.getElementById('begining');

logo.addEventListener('click', scrollToTop);