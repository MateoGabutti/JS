

do{
    edad = parseInt(prompt("Ingrese su edad"))
    if(edad >= 18){
        alert("Usted es mayor de edad, puede ingresar")
    }else{
        alert("Usted es menor de edad, no puede ingresar")
    }
}while(edad == "" || edad < 18)

function fechaCumple(){
    do{
        cumpleaniosDia = parseInt(prompt("Como usted es mayor de edad, queremos saber que dia cumple (el numero, NO el mes)"))
        cumpleaniosMes = prompt("Ahora queremos saber en que mes")
        if(cumpleaniosDia < 1 || cumpleaniosDia > 31){
            alert("Ingrese una fecha valida")
        }else{
            alert(`Cumplis el ${cumpleaniosDia} de ${cumpleaniosMes}. Estas habilitado para seguir con el cuestionario`)

        }
        
    }while(cumpleaniosDia < 1 || cumpleaniosDia > 31)
    
}
let cumple = fechaCumple()

function breakfast(){
    let desayuno = prompt("Que soles tomar en el desayuno?").toLowerCase()
    let desayunoComida = prompt("Que soles comer en el desayuno?").toLowerCase()

    if((desayuno === "nada" ||  desayuno === "")  || (desayunoComida === "nada" ||  desayunoComida === "")){
        alert("No desayunas como corresponde")
    }else{
        alert(`${desayuno} y ${desayunoComida} que rico!`)
    }
    
}
let sayuno = breakfast()


alert("A continuacion, tenemos un acertijo para hacer")

//adivina la palabra
let palabra1 = "riquelme"
let palabra2 = "paredes"
let vidasParaAdivinar1 = 5
let vidasParaAdivinar2 = 5

function adivinaLaPalabra1(){
    do{
        palabraParaAdivinar = prompt(`Este es un acertijo. Tenes que adivinar el jugador de futbol (ESCRIBI EL APELLIDO). Es argentino, derecho y es considerado uno de los mejores jugadores del futbol argentino (YA ESTA RETIRADO). Tenes ${vidasParaAdivinar1} vidas`).toLowerCase()
        if(palabraParaAdivinar == palabra1){
            alert(`Felicitaciones, el jugador era Juan Roman Riquelme. Te quedaron ${vidasParaAdivinar1} vidas`)
            break
            
        }else {
            vidasParaAdivinar1 = vidasParaAdivinar1 - 1
            if(vidasParaAdivinar1 <= 0){
                alert(`Lo siento, te quedaste sin vidas el jugador era ${palabra1}`)
                break
            }
        }
    }while((palabraParaAdivinar !== palabra1) || (vidasParaAdivinar1 <= 0))
}
let acertijo = adivinaLaPalabra1()

function adivinaLaPalabra2(){
    do{
        palabraParaAdivinar2 = prompt(`Otro acertijo. Tenes que adivinar el jugador de futbol(ESCRIBI EL APELLIDO). Es argentino, su pie habil es el derecho, es uno de los jugadores que potencio Scaloni en la seleccion y juega en la mitad de cancha. Tiene muchas chances de ir a Qatar  . Tenes ${vidasParaAdivinar2} vidas`).toLowerCase()
        if(palabraParaAdivinar2 == palabra2){
            alert(`Felicitaciones, el jugador era Paredes. Te quedaron ${vidasParaAdivinar2} vidas`)
            break
            
        }else {
            vidasParaAdivinar2 = vidasParaAdivinar2 - 1
            if(vidasParaAdivinar2 <= 0){
                alert(`Lo siento, te quedaste sin vidas el jugador era ${palabra2}`)
                break
            }
        }
    }while((palabraParaAdivinar !== palabra2) || (vidasParaAdivinar2 <= 0))
}
let acertijo2 = adivinaLaPalabra2()


/*function LocalDeRopa (nombreLocal = "Fika" , remeras, pantalones ){
    this.nombreLocal = nombreLocal
    this.remeras = remeras
    this.pantalones = pantalones
}
let nombreLocal = prompt("Escribe el nombre de local")
let remeras = prompt ("Que remera queres llevarte?")
let pantalones = prompt ("Que pantalon queres llevarte?")

const cliente = new LocalDeRopa(nombreLocal, remeras, pantalones)
console.log(cliente)
function Persona (nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}
let nombre = prompt("Escriba su nombre")
const persona1 = new Persona (nombre, apellido, edad)*/
