//para validar que solo se acepte numeros en la caja de texto
function solonumeros(e){
	key=e.keyCode || e.which;
	teclado=String.fromCharCode(key);
	numeros="0123456789";
	especiales="8-37-39-46";
	tecla_especial=false;
	for (var i in especiales) {
		if(key==especiales[i]){
			tecla_especial=true;
		}
	}
	//si se encuentra en la cadena de numeros
	if(numeros.indexOf(teclado)==-1 && !tecla_especial){//si no se encuentra
return false;//no aceptara el ingreso de esa tecla
	}
}
//para asignar cada valor a cada boton
function retornarnumeros(num){
	var anterior=document.formulario.campo.value;
	document.getElementById("campo").value=anterior+num;
}
//para eliminar el ultimo caracter
function eliminar(){
	var anterior=document.formulario.campo.value;
	var nuevovalor=anterior.substring(0,anterior.length-1);
	document.getElementById("campo").value=nuevovalor;
}
//para eliminar todo los valores del campo
function eliminarTodo(){
	document.formulario.campo.value="";
}
//para validar los signos de la calculadora
function comprobar(num){
	var anterior = document.formulario.campo.value;
            if (anterior == "") {
                document.formulario.campo.value = "";
            } else {
                var anterior = document.formulario.campo.value;
                document.getElementById("campo").value = anterior + num;//settea los valores
                esto = document.formulario.campo.value;

                record = 0;
                igual = 1;
                var letraRecord;
                var b = 0;
                var letra = "";

                for (a = 1; a < esto.length; a++) {
                    if (esto.charAt(a) == "+" || esto.charAt(a) == "-" 
                    	|| esto.charAt(a) == "*" ||esto.charAt(a) == "/"){
						igual = igual + 1;
                        letra = esto.charAt(a);
                    }else{
						if(igual>record){
						record=igual;
						letraRecord=letra;
					}
						igual=1;
					}
				     b = a;
                }
                if (igual > record) {
                    record = igual;
                    letraRecord = letra;
                }
                if (record > 2) {
                    var anterior = esto;
                    var nuevovalor = anterior.substring(0, anterior.length - 1);
                    document.getElementById("campo").value = nuevovalor;
                    record = 0;
                    b = 0;
                    igual = 1;
                    letra = "";
                    letraRecord = "";
                }
            }
}
	

//para realizar las operaciones matematicas

function calcular(){
	var resultado=eval(document.formulario.campo.value);
	document.formulario.campo.value=resultado;
}

