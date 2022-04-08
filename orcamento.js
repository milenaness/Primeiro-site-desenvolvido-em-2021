/*

	O Javascript é uma linguagem de programação que roda sobre o HTML e dentro de um browser (navegador).

	É uma linguagem padrão ECMA sensível à caixa (diferencia maiúsculas de minúsculas) e cada linha de código encerra com ;
	
	O Javascript(Js) não tem nada a ver como JAVA.

	O Js possui alguns comandos de saída:
		- alert("texto") - função que abre um alerta na página

	O Js possui alguns comandos de entrada de dados
		- confirm("Pergunta") - abre uma caixa de confirmação 
		- prompt("texto") - abre uma caixa onde o usuário pode escrever é sempre uma string

	O sinal de + além de somar concatena no Js, concatenar é juntar por exemplo dois textos, um texto e uma variável, etc

	Tipos de Dados no Js
		string - cadeias de caractere sempre entre "" - "Texto a ser"
		int	   - números inteiros - 100

	Quando o dado vem de um campo como o prompt que usa tipo de dado string precisamos converter para int com o comando parseInt()
	
	Operação aritméticas são executadas: primeiro * / na ordem que aparecem  depois + -  na ordem aparecem. Existem os símbolos () para escolher a ordem de execução , primeiro executa o parêntese mais interno.
		(3+3+3)/3 = 3 
		(3+3)+3/3 = 7
		3+3+3/3 = 7

	parseInt("numero") - converte números que estão em string para inteiro


	let valor01 = parseInt( prompt("Informe o primeiro valor:") );
	let valor02 = parseInt( prompt("Informe o segundo valor:") );

	let resultado = valor01 + valor02;

	alert( "O resultado foi: " + resultado );
	confirm( "Você tem Certeza disso?" );

*/

// Para pegarmos o click no botão id prox1
let btn01 = document.getElementById("prox1");
let btn02 = document.getElementById("prox2");

let btnVolta01 = document.getElementById("volt1");
let btnVolta02 = document.getElementById("volt2");

//Pegamos usando querySelectorAll com o seletor do CSS
let field01 = document.querySelector("#conteudos form fieldset:nth-child(1)");
let field02 = document.querySelector("#conteudos form fieldset:nth-child(2)");
let field03 = document.querySelector("#conteudos form fieldset:nth-child(3)");

// chamndo uma função SEM argumentos ou parâmetros
//btn01.addEventListener( "click", chamaDisplayTela02, false );

// chamando uma função COM argumentos
btn01.addEventListener( "click", function( e ){
	e.preventDefault();
	//mostraAlerta( e , "Novo Texto!" );
	chamaDisplayTela02(  field01 , field02, "2" );
});

btn02.addEventListener( "click", function( e ){
	e.preventDefault();
	//mostraAlerta( e , "Novo Texto!" );
	chamaDisplayTela02(  field02 , field03, "3" );
});

btnVolta01.addEventListener("click", function(e){
	e.preventDefault();
	chamaDisplayTela02("field02","field01","1");
});

btnVolta02.addEventListener("click", function(e){
	e.preventDefault();
	chamaDisplayTela02("field03","field02","2");// visivel, mostrar, bolinha
});


function mostraAlerta( e, texto ){
	e.preventDefault();// previne o comportamento padrão do botão que é enviar o form
	alert( texto );
}

// dentro dos parênteses temos parâmetros que podem ser usados para tornar a programação mais inteligente
function chamaDisplayTela02( visivel, invisivel, quem )
{
	//e.preventDefault();
	// ocultando o primeiro fieldset
	visivel.style.display = "none";
	invisivel.style.display = "block";
	// Mudar o Background do link correto (#333333) e o color #ffffff
	mudaMarcador( quem );
}

/*
 *	Altera a formatação do marcador de acordo com o fieldset mostrado
 *  
 *  @param quem string - número do item na lista 
 *
 */
function mudaMarcador( quem )
{
	let quemPerde = parseInt(quem) - 1;

	// Aplique o padrão para todos
	document.querySelector( "#etapas li:nth-child(" + quemPerde + " ) a" ).style.backgroundColor = "#cccccc";
	document.querySelector( "#etapas li:nth-child(" + quemPerde + " ) a" ).style.color = "#333333";

	// seleciona a primeira bolinha
	let marcador = document.querySelector("#etapas li:nth-child(" + quem + " ) a");

	// formata usando o parâmetro quem
	marcador.style.backgroundColor = "#333333";
	marcador.style.color = "#ffffff";
		
}

/*
function chamaZindexTela02( e )
{
	e.preventDefault();
	// ocultando o primeiro fieldset
	field01.style.zIndex = "1";
	field02.style.display = "block";
	field02.style.zIndex = "10";
}
*/
