



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
            return `Cumplis el ${cumpleaniosDia} de ${cumpleaniosMes}. Estas habilitado para seguir con el cuestionario`
        }
    }while(cumpleaniosDia < 1 || cumpleaniosDia > 31 )
    
}
let cumple = fechaCumple()
alert(cumple)

function saludar(nombre){
    
    nombre = prompt("Ahora, necesitamos saber su nombre")
    return `Hola ${nombre}, como andas?`
}
let name = saludar()
alert(name) 

let desayuno = prompt("Que soles tomar en el desayuno?").toLowerCase()
let desayunoComida = prompt("Que soles comer en el desayuno?").toLowerCase()

function breakfast(){
    if((desayuno === "nada" ||  desayuno === "")  || (desayunoComida === "nada" ||  desayunoComida === "")){
        alert("No desayunas como corresponde")
    }else{
        return `${desayuno} y ${desayunoComida} que rico!`
    }
    
}
let sayuno = breakfast()
alert(sayuno)



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
