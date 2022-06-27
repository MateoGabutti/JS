/*let desayuno = prompt("Soles desayunar?Escribe 'si' o 'no' ").toLowerCase()
if(desayuno == "si"){
    console.log("Muy bien desayunando")
}else{
    console.log("TENES QUE DESAYUNAR")
}


if(numero < 10){
    alert("Pusiste un numero menor a 10")
}*/
let edad = 18

do{
    edad = parseInt(prompt("Ingrese su edad"))

    if(edad >= 18){
        alert("Usted es mayor de edad, puede ingresar")
    }else{
        alert("Usted es menor de edad, no puede ingresar")
    }
}while(edad < 18)

/* OTRO EJEMPLO */

let numero = parseInt(prompt("Ingrese una nota del 1 al 10 (si lo haces bien se te suma un punto en la nota, sino perdes la oportunidad)"))
if(numero < 1 || numero > 10){
    alert("Perdiste la oportunidad de sumar un punto")
}else{
    for(i = 1; i <= 1; i++ ){
        alert(numero + i)
        if(numero >= 6 && numero <= 9){
            alert("Aprobaste")
            
        }else if(numero === 10){
            alert("SUPERASTE LA NOTA MAXIMA, FELICITACIONES")
            
        }else{
            alert("Desaprobaste")
            
        }
    }
    console.log("Tu nota final es " + (numero + 1)) 
}


/* OTRO EJEMPLO */




