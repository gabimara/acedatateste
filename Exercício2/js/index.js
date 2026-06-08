/* 
    Essa função tem o intuito de criar inputs para o usuário inserir os algarismos
    que serão comparados e utilizados
*/
function criarInputs() {

    const quantidade = parseInt(
        document.getElementById("quantidade").value);

    const campos = document.getElementById("campos");

    campos.innerHTML = "";

    for (let i = 0; i < quantidade; i++) {
        campos.innerHTML += `<input type="number" class="algarismo" placeholder="Digite o algarismo ${i + 1}"> <br>`;
    }
}

/* 
    Essa função tem o intuito de pegar a sequencia digitada pelo usuário
    e comparar os números para encontrar qual o maior e menor
*/


function calcular() {
    const inputs = document.querySelectorAll(".algarismo");
    const algarismos = [];

    for (let input of inputs) {
        if (input.value === "") {
            alert("Preencha todos os algarismos.");
            return;
        }

        algarismos.push(parseInt(input.value));
    }

    const maior = Math.max(...algarismos);
    const menor = Math.min(...algarismos);

    const ordemNum = [...new Set(algarismos)].sort((a, b) => b - a);

    if (ordemNum.length < 2) {
        document.getElementById("resultado").innerHTML = 
        `<p>Os algarismos inseridos são: ${algarismos.join(", ")}</p>
            <p>O maior algarismo é: ${maior}</p>
            <p>O menor algarismo é: ${menor}</p>
            <p>Não existe segundo maior algarismo.</p>`;
        return;
    }
    
    const segundoMaior = ordemNum[1];

    document.getElementById("resultado").innerHTML = 
    `<p>Os algarismos inseridos são: ${algarismos.join(", ")}</p>
        <p>O maior algarismo é: ${maior}</p>
        <p>O segundo maior algarismo é: ${segundoMaior}</p>
        <p>O menor algarismo é: ${menor}</p>`;
}
