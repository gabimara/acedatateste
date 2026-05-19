/* 
    Essa função tem o intuito de realizar a a sequência de fibonacci
    de  modo que ela coloque em ordem uma sequência numérica extamente como a espiral; ex: 1 1 2 3 5 8 13 21
*/

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }   
}

/* 
    Essa função tem o intuito de vereficar se o número forneciido é pertetncente a sequência de fibonacci
    ou seja, se o número aparece dentro da sequência ou não.
*/
function pertenceAFibonacci(num) {
    for (let i = 0; fibonacci(i) <= num; i++) {

        if (fibonacci(i) === num) {
            return true;
        }
    }
    return false;
}

/* 
    Essa parte do código mostra a interação com DOM, sendo a parte visual do código
    onde será mostrada a sequência solicitada pelo usuário e se o número aparece ou não na sequência da espiral de fibonacci.
*/
document.getElementById('processFibonacci').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numberFibonacci').value);
    const resultado = document.getElementById('resultFibonacci');
    const numer = fibonacci(numero);
    const pertence = pertenceAFibonacci(numero);

    resultado.textContent = `O número ${numero} ${pertence ? 'pertence' : 'não pertence'} à sequência de Fibonacci, e o número de Fibonacci correspondente é: ${numer}`;
});
