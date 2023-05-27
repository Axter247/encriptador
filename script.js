
const contenedor = document.querySelector (".textoBox");
const resultado = document.querySelector (".rstTexto");
const parrafo =document.querySelector (".parrafo")

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


function copiartextobtn() {
    
    resultado.select();
    resultado.execCommand("resultado");
    alert("El texto ha sido copiado al portapapeles.");
}


function btnEncriptar (){
    const textoencriptado = encriptar(contenedor.value)
    resultado.value = textoencriptado
    contenedor.value="";
    resultado.style.backgroundImage = "none"
    parrafo.textContent = "";


}



function encriptar(stringEntriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    
    stringEntriptada = stringEntriptada.toLowerCase()

    for(let i =0;i < matrizCodigo.length; i++){
        if (stringEntriptada.includes(matrizCodigo [i][0])){
             stringEntriptada = stringEntriptada.replaceAll(matrizCodigo [i][0], matrizCodigo[i][1]);

        }


    }
    return stringEntriptada
}




function btn (){
    const textoencriptado = desencriptar(contenedor.value)
    resultado.value = textoencriptado
    contenedor.value="";
    

}

function desencriptar(stringdesentriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    
    stringdesentriptada = stringdesentriptada.toLowerCase()

    for(let i =0;i < matrizCodigo.length; i++){
        if (stringdesentriptada.includes(matrizCodigo [i][1])){
            stringdesentriptada = stringdesentriptada.replaceAll(matrizCodigo [i][1], matrizCodigo[i][0]);

        }


    }
    return stringdesentriptada
}





 