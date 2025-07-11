if (localStorage.getItem("token") == null) {
    alert("Voce precisa estar logado para acessar essa página web");
    window.location.href = "./assets/html/signin.html";

}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`; 

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html"
}