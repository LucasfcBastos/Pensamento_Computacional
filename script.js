let contasCadastradas = [];

function cadastrarUsuario(usuario, senha) {
    contasCadastradas.push({ usuario, senha });
}

function comparar(usuario, senha) {
    for (let i = 0; i < contasCadastradas.length; i++) {
        const { usuario: user, senha: pwd } = contasCadastradas[i];
        if (user === usuario && pwd === senha) {
            return true;
        }
    }
    return false;
}

function show(showId, hideId) {
    document.getElementById(showId).style.display = "block";
    document.getElementById(hideId).style.display = "none";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (comparar(username, password)) {
        window.open("https://www.youtube.com/watch?v=PkPHDd9O9Yg");
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

function register() {
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;
    cadastrarUsuario(newUsername, newPassword);
    alert("Usuário cadastrado com sucesso!");
}