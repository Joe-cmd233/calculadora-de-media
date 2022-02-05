function calculate() {
	var nome = document.getElementById("no").value;
	console.log(nome);

	//registrar a nota do 1º BIMESTRE
	var notaPrimeiroBimestre = document.getElementById("n1").value;
	//registrar a nota do 4º BIMESTRE
	var notaQuartoBimestre = document.getElementById("n4").value;
	console.log(notaQuartoBimestre);

	//registrar a nota final
	var notaSomada =
		parseFloat(notaPrimeiroBimestre) + parseFloat(notaQuartoBimestre);
	console.log(notaSomada);

	var notaFiiF = notaSomada / 2;
	console.log(notaFiiF);

	var notaFinal = notaFiiF.toFixed(1);
	console.log(notaFinal);

	var result = "null";
	console.log(result);

	var resultado = document.getElementById("resultado");
	console.log(resultado);
	//console.log sequencia: nome, notaPrimeiroBimestre, notaSegundoBimestre, notaTerceiroBimestre, notaQuartoBimestre, notaSomada, notaFiiF, notaFinal, result, resultado
	//mostra uma mensagem e a nota
	if (notaFinal >= 6) {
		let result = "aprovado";
		resultado.innerHTML =
			nome + " está " + result + " a média de " + nome + " foi " + notaFinal;
		console.log("yay");
	}
	if (notaFinal < 6) {
		let result = "reprovado";
		resultado.innerHTML =
			nome + " está " + result + " a média de " + nome + " foi " + notaFinal;
		console.log(";-;");
	}
}
function warning() {
	alert(
		"Ao inserir notas decimais como: 5.5, 9.4 e 6.9 use ponto (.) ao invés de vírgula (,)."
	);
}
function creditos() {
	var twitter =
		"twitter(apenas porcaria nada tecnico): https://www.twitter.com/";
	var facebook = "facebook: ainda sem pagina :/";
	alert("redes sociais: " + facebook + twitter);
}

function a() {
	resultado.innerHTML =
		"https://studio.code.org/projects/gamelab/pAK2nnxsRLUki3TZ-75nvNGxHrSCUBvMyrCOx4omlto ";
	console.log("?");
}