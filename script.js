
const regexes = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    cep: /^\d{5}-\d{3}$/,
    celular: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
    numero: /^\d+$/,
    nome: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
};


function validarCampo(inputElement, erroElement, regex, mensagemErro) {
    const valor = inputElement.value.trim();

    if (valor === '') {
        erroElement.textContent = '';
        inputElement.style.borderColor = '';
        return;
    }

    if (!regex.test(valor)) {
        erroElement.textContent = mensagemErro;
        erroElement.style.color = '#d32f2f'; 
        inputElement.style.borderColor = '#d32f2f';
    } else {

        erroElement.textContent = '';
        inputElement.style.borderColor = '#2e7d32'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const campos = [
        {
            input: document.getElementById('inputEmail'),
            erro: document.getElementById('mensagemErroEmail'),
            regex: regexes.email,
            mensagem: 'E-mail inválido. Exemplo correto: teste@email.com'
        },
        {
            input: document.getElementById('inputCEP'),
            erro: document.getElementById('mensagemErroCEP'),
            regex: regexes.cep,
            mensagem: 'CEP inválido. O formato deve ser 00000-000'
        },
        {
            input: document.getElementById('inputCelular'),
            erro: document.getElementById('mensagemErroCelular'),
            regex: regexes.celular,
            mensagem: 'Celular inválido. O formato deve ser (00) 00000-0000'
        },
        {
            input: document.getElementById('inputNumero'),
            erro: document.getElementById('mensagemErroNumero'),
            regex: regexes.numero,
            mensagem: 'Apenas números são permitidos neste campo'
        },
        {
            input: document.getElementById('inputNome'),
            erro: document.getElementById('mensagemErroNome'),
            regex: regexes.nome,
            mensagem: 'Apenas letras e espaços são permitidos'
        }
    ];

    campos.forEach(campo => {
        if (campo.input && campo.erro) {
            campo.input.addEventListener('input', () => {
                validarCampo(campo.input, campo.erro, campo.regex, campo.mensagem);
            });
        }
    });
});