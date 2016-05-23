var tamano          = 11.
        cuadros         = Math.pow(tamano,2),
        aleatorios      = Math.pow(tamano,2),
        arrayId         = [],
        arrayAdivinados = [],
        numeraComparar  = 0,
        dato            = 0,
        segundos        = 60,
        minutos         = 4,
        ayudas          = 0,
        puntaje         = 0;

window.onload = function()
{
    /*swal({   
        title: "Error!",   
        text: "Here's my error message!",   
        type: "error",   
        confirmButtonText: "Cool" 
    })*/
	    

    creaCuadricula();
    numAleatorios();
    
    function creaCuadricula()
    {

		txt     	= "<table>",
        nomID   	= "";
        arrayId 	= [];
        //el tamño correcto es 404px
        nom_div("escenario").style.height="404px";
        nom_div("escenario").style.width="404px";
        for(var fila = 0; fila < tamano; fila++)
        {
            txt += "<tr>";
            for(var col = 0; col < tamano; col++)
            {
            	nomID = col + "_" + fila;
                txt += "<td  class = 'cuadricula' id = 'td_"+(nomID)+"'>";
                txt += "</td>";
                posicion="td_"+col+"_"+fila;
                arrayId.push(posicion);
            }
            txt += "</tr>";
        }
        txt += "</table>";
        nom_div("escenario").innerHTML = txt;
        
        // para capturar los ids de cada uno de los td
        //nom_div("td_0_0").innerHTML = "4";
    }
};

function reloj() 
{
    segundos--

if(segundos==-1)
{
    segundos=59;
    minutos--
    console.log(minutos+":"+segundos);
    if(minutos==-1 && segundos== 59)
    {
        //alert("Se acabo el tiempo, perdiste");
        sweetAlert("Lo siento", "El tiempo ha terminado", "error");
        puntaje         = 0;
        minutos         = 4;
        aleatorios = Math.pow(tamano,2);
        nom_div("score").innerHTML="SCORE:"+puntaje;
        console.log(puntaje);
        
        nuevoJuego();
    }
}

    //var fObj = new Date() ; 
    //var horas = fObj.getHours() ; 
    //var minutos = fObj.getMinutes() ; 
    //var segundos = fObj.getSeconds() ; 
    //if (horas <= 9) horas = "0" + horas; 
    //if (minutos <= 9) minutos = "0" + minutos; 
   // if (segundos <= 9) segundos = "0" + segundos; 
    //x = minutos+":"+segundos; 
    tiempo = "Tiempo restante: "+minutos+":"+segundos; 
    //console.log(x);
    nom_div("timer").innerHTML=tiempo;

    //****************************para ejecutarlo cada un segundo se ejecuta la siguiente linea
    //setInterval("reloj()",1000);
    //*****************************************************************************************
}

document.addEventListener('click', function(e) 
        {
        	dato = e.target.id;
            numeroA = nom_div("adivina").innerHTML;
            if(arrayId.indexOf(dato)>=0)
            {
                numeraComparar= nom_div(dato).innerHTML;
                //console.log(numeraComparar);
                if(numeroA==numeraComparar&&arrayAdivinados.length<=cuadros)
                {
                    puntaje+=10;

                    nom_div(dato).style.backgroundColor="#2247C0";
                    arrayAdivinados.push(num);
                    nom_div("score").innerHTML="SCORE:"+puntaje;
                    numeroAdivinar();
                }
            }
		});

nom_div("ayuda").addEventListener('click', function(event)
    {
        if(ayudas<3)
        {
            numeroB = nom_div("adivina").innerHTML;
            //console.log(numeroB);
            for(var k=0;k<arrayId.length;k++)
            {
                numeroC = nom_div(arrayId[k]).innerHTML;
                //console.log(numeroC);
                if(numeroC==numeroB)
                {
                    nom_div(arrayId[k]).style.backgroundColor="#881a1b";
                    ayudas++
                }
            }
        }
        else
        {
            //alert("Lo siento ya no tienes mas ayudas");
            sweetAlert("Lo siento", "Se han acabado las ayudas", "error");
        }
    });

nom_div("nuevo").addEventListener('click', function(event)
    {
        puntaje         = 0;
        aleatorios = Math.pow(tamano,2);
        nom_div("score").innerHTML="SCORE:"+puntaje;
        nuevoJuego();
    });

nom_div("comenzar").addEventListener('click', function(event)
    {
        nom_div("comenzar").style.display="none";
        setInterval("reloj()",1000);
        numeroAdivinar();
    });

function nuevoJuego()
{
    ayudas          = 0;
    segundos        = 60;
    minutos         = 4;
    arrayAdivinados = [];
        for(var i=0;i<arrayId.length;i++)
        {
            nom_div(arrayId[i]).style.backgroundColor="#79ff4d";
            nom_div(arrayId[i]).innerHTML=" ";
        }
    numAleatorios();
    numeroAdivinar();
}

function numAleatorios()
    {

    	arrayPosns=[];
    	for(numAleatorio=0 ;numAleatorio<aleatorios;numAleatorio++)
    	{
	    	num = Math.floor(Math.random() * cuadros)+1;
	    	if(arrayPosns.indexOf(num)<0)
	    	{
	    		arrayPosns.push(num);
			}
	    	else
	    	{
	    		aleatorios+=1;
	    	}
    	}
        for(var i=0;i<arrayId.length;i++)
        {
            nom_div(arrayId[i]).innerHTML = arrayPosns[i];
        }
    }

    
function numeroAdivinar()
{
        if(arrayAdivinados.length==cuadros)
        {
            //alert("Felicidades terminaste");
            swal("Felicidades", "Has terminado antes de tiempo", "success")
            aleatorios = Math.pow(tamano,2)
            nuevoJuego();
        }
        else
        {
            num = Math.floor(Math.random() * cuadros)+1;
            if(arrayAdivinados.indexOf(num)<0)
            {
                nom_div("adivina").innerHTML=num;
            }
            else
            {
                numeroAdivinar();
            }
        }
}


function nom_div(div)
    {
        return document.getElementById(div);
    }

 