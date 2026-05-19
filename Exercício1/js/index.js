let salario_familia = 0
let salario_bruto = 0
let salario_liquido = 0 

/* 
    Essa função tem o intuito de calcular o salário bruto do funcionário
    com base no valor da hora trabalhada e na quantidade de horas trabalhadas.
*/
function calcularSalarioBruto(valor_hora_trabalhada, qtd_horas_trabalhadas){
	return valor_hora_trabalhada * qtd_horas_trabalhadas
}

/* 
    Essa função tem o intuito de calcular o salário da família do funcionário
    com base no salário bruto e na quantidade de filhos menores de 18 anos.
*/
function calcularSalarioFamilia(salario_bruto, qtd_filhos_menores){

	if(salario_bruto <= 788.00){
		return qtd_filhos_menores * 30.50
	}
	else if(salario_bruto <= 1100.00){
		return qtd_filhos_menores * 18.50
	}
	else{
		return qtd_filhos_menores * 11.90
	}
}
/* 
    Essa função tem o intuito de calcular o salário líquido do funcionário
    com base no salário bruto e no salário da família.
*/
function calcularSalarioLiquido(){

	let qtd_horas_trabalhadas =
		Number(document.getElementById("qtd_horas_trabalhadas").value)

	let valor_hora_trabalhada =
		Number(document.getElementById("valor_hora_trabalhada").value)

	let qtd_filhos_menores =
		Number(document.getElementById("qtd_filhos_menores").value)

	salario_bruto = calcularSalarioBruto(
		valor_hora_trabalhada,
		qtd_horas_trabalhadas
	)

	salario_familia = calcularSalarioFamilia(
		salario_bruto,
		qtd_filhos_menores
	)

	salario_liquido = salario_bruto + salario_familia

	document.getElementById("resultado").innerText =
		"Salário Líquido: R$ " + salario_liquido.toFixed(2)
}