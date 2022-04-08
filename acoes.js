// Menu do celular entrando e saindo da tela

var aberto = false;// indica que o menu está escondido

function abreFechaMenu()
{
	// se está aberto ou fechado
	// alterar a propriedade left ( 0 visível / -100vw invisível)
	if( aberto ==  false )
	{
		// traz o menu para dentro da tela
		document.querySelector("main nav").style.left = 0;
		// avisar que ele está dentro 
		aberto = true;
	}
	else
	{
		document.querySelector("main nav").style.left = "-100vw";
		aberto = false;
	}

}