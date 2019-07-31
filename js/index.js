var code = parseInt(prompt("Digite o código do aluno:"));
var grade01 = parseFloat(prompt("Digite a primeira nota:"));
var grade02 = parseFloat(prompt("Digite a segunda nota:"));
var grade03 = parseFloat(prompt("Digite a terceira nota:"));
var average = 0;
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")
var p4 = document.createElement("p")

if (grade01>grade02 && grade01>grade03) {
	average = (((grade01*4)+(grade02*3)+(grade03*3))/10)
}else if (grade02>grade01 && grade02>grade03) {
	average = (((grade02*4)+(grade01*3)+(grade03*3))/10)
}else if (grade03>grade01 && grade03>grade01) {
	average = (((grade03*4)+(grade01*3)+(grade02*3))/10)
}else {
	document.body.append("Error")
}

if (average >= 5){
	p1.append("O código do aluno é: " + code);
	document.body.appendChild(p1);
	p4.append("Suas três notas são: " + grade01 + ",     " + grade02 + " e     " + grade03);
	document.body.appendChild(p4);
	p2.append("A média ponderada é: " + average);
	document.body.appendChild(p2);
	p3.append("Situação do aluno: APROVADO!");
	document.body.appendChild(p3);
}else {
	p1.append("O código do aluno é: " + code);
	document.body.appendChild(p1);
	p4.append("Suas três notas são: " + grade01 + ",     " + grade02 + " e     " + grade03);
	document.body.appendChild(p4);
	p2.append("A média ponderada é: " + average);
	document.body.appendChild(p2);
	p3.append("Situação do aluno: REPROVADO!");
	document.body.appendChild(p3);
}