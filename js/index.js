do{
    edad = parseInt(prompt("Ingrese su edad"))
    if(edad >= 18){
        alert("Usted es mayor de edad, puede ingresar")
    }else{
        alert("Usted es menor de edad, no puede ingresar")
    }
}while(edad == "" || edad < 18) 

class Jugador{
    constructor(nombre, equipo, posicion, sueldo ){
        this.nombre = nombre
        this.equipo = equipo
        this.posicion = posicion
        this.sueldo = sueldo
    }
}

const jugadores = ["Riquelme", "busquets", "paredes", "lloris", "Messi", "neymar"]

const jugador11 = new Jugador("riquelme", "boca", "mediocampista", 1500000)
const jugador12 = new Jugador("paredes", "psg", "mediocampista", 1000000)
const jugador13 = new Jugador("busquets", "barcelona", "mediocampista", 1400000)
const jugador14 = new Jugador("lloris", "totthenham", "arquero",1200000)


const players = [ jugador11, jugador12, jugador13, jugador14]
const jugadoresEliminados = jugadores.splice(4,2, "Ortigoza", "ronaldo", "pele")
jugadores.push("guardiola")
jugadoresJoin = jugadores.join("----")
console.log(jugadoresEliminados)
console.log(jugadores)
console.log(jugadoresJoin)
console.log(players)
console.log(players.find(jugador => jugador.nombre == "paredes"))
const jugadoresFilter = players.filter(jugador => jugador.sueldo > 1300000)

jugadoresFilter.forEach(jugador =>{
    console.log(jugador)
})

console.log(players[0].equipo)

class JugadorIdeal{
    constructor (derecha, zurda, cabezazo, velocidad, tiro){
        this.derecha = derecha
        this.zurda = zurda
        this.cabezazo = cabezazo
        this.velocidad = velocidad
        this.tiro = tiro
    }
}

const jugadoresVacio = []
let seguir

do{
    alert("Elegi a tu jugador ideal. Vas a poder crear a un jugador con las caracteristicas de distintos jugadores  ")
    do{
        derecha = prompt("Elegi la pierna derecha de tu jugador ideal(Escribi el jugador que consideres que sea el mejor con la derecha )").toLowerCase()
        zurda = prompt("Elegi la pierna zurda de tu jugador ideal (Escribi el jugador que consideres que sea el mejor con la zurda )").toLowerCase()
        cabezazo = prompt("Elegi el cabezazo de tu jugador ideal(Escribi el jugador que consideres que sea el mejor cabeceador)").toLowerCase()
        velocidad = prompt("Elegi la velocidad de tu jugador ideal(Escribi el jugador que consideres que sea el mas rapido)").toLowerCase()
        tiro = prompt("Elegi el tiro de tu jugador ideal(Escribi el jugador que consideres que tenga el mejor tiro)").toLowerCase()
    }while((derecha == "" || zurda == "" || cabezazo == "" || velocidad == "" || tiro == ""))

    const jugadorArray = new JugadorIdeal(derecha, zurda, cabezazo, velocidad, tiro)
    jugadoresVacio.push(jugadorArray)
    seguir = prompt("Desea crear otro jugador? Escribe si o no").toLowerCase()

}while(seguir != "no")

console.log(jugadoresVacio)

alert("A continuacion, tenemos un acertijo para hacer")

//adivina la palabra
let palabra1 = "riquelme"
let palabra2 = "paredes"
let palabra3 = "busquets"
let palabra4 = "lloris"


//VIDAS
let vidasParaAdivinar1 = 5
let vidasParaAdivinar2 = 5
let vidasParaAdivinar3 = 5
let vidasParaAdivinar4 = 5

let palabraParaAdivinar1, palabraParaAdivinar2, palabraParaAdivinar3, palabraParaAdivinar4
function adivinaLaPalabra1(){
    do{
        palabraParaAdivinar1 = prompt(`Este es un acertijo (nivel facil). Tenes que adivinar el jugador de futbol (ESCRIBI EL APELLIDO). Es argentino, derecho y es considerado uno de los mejores jugadores del futbol argentino (YA ESTA RETIRADO). TENES ${vidasParaAdivinar1} VIDAS`).toLowerCase()
        if(palabraParaAdivinar1 == palabra1){
            alert(`Felicitaciones, el jugador era Juan Roman Riquelme. Te quedaron ${vidasParaAdivinar1} vidas`)
            break
            
        }else {
            vidasParaAdivinar1 = vidasParaAdivinar1 - 1
            if(vidasParaAdivinar1 <= 0){
                alert(`Lo siento, te quedaste sin vidas el jugador era ${palabra1}`)
                break
            }
        }
    }while((palabraParaAdivinar1 !== palabra1) || (vidasParaAdivinar1 <= 0))
}
let acertijo = adivinaLaPalabra1()

function adivinaLaPalabra2(){
    do{
        palabraParaAdivinar2 = prompt(`Acertijo 2 (nivel facil). Tenes que adivinar el jugador de futbol(ESCRIBI EL APELLIDO). Es argentino, su pie habil es el derecho, es uno de los jugadores que potencio Scaloni en la seleccion y juega en la mitad de cancha. Tiene muchas chances de ir a Qatar  . TENES ${vidasParaAdivinar2} VIDAS`).toLowerCase()
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
    }while((palabraParaAdivinar2 !== palabra2) || (vidasParaAdivinar2 <= 0))
}
let acertijo2 = adivinaLaPalabra2()

function adivinaLaPalabra3(){
    do{
        palabraParaAdivinar3 = prompt(`Acertijo 3 (nivel medio). Tenes que adivinar el futbolista(ESCRIBI EL APELLIDO). Es español, juega de "5" en uno de los equipos mas grandes de españa y tiene 33 años . TENES ${vidasParaAdivinar3} VIDAS`).toLowerCase()
        if(palabraParaAdivinar3 === palabra3){
            alert(`Felicitaciones, el jugador era Busquets. Te quedaron ${vidasParaAdivinar3} vidas`)
            break
        }else{
            vidasParaAdivinar3 = vidasParaAdivinar3 - 1
            if(vidasParaAdivinar3 <= 0){
                alert(`Lo siento, te quedaste sin vidas el jugador era ${palabra3}`)
                break
            }
        }
    }while((palabraParaAdivinar3 !== palabra3) || (vidasParaAdivinar3 <= 0))
}
let acertijo3 = adivinaLaPalabra3()

function adivinaLaPalabra4(){
    do{
        palabraParaAdivinar4 = prompt(`Acertijo 4 (nivel dificil). Tenes que adivinar el futbolista(ESCRIBI EL APELLIDO). Es frances, juega en el tottenham y tambien en la seleccion francesa. TENES ${vidasParaAdivinar4} VIDAS`).toLowerCase()
        if(palabraParaAdivinar4 === palabra4){
            alert(`Felicitaciones, el jugador Hugo Lloris. Te quedaron ${vidasParaAdivinar4} vidas`)
            break
        }else{
            vidasParaAdivinar4 = vidasParaAdivinar4 - 1
            if(vidasParaAdivinar4 <= 0){
                alert(`Lo siento, te quedaste sin vidas el jugador era ${palabra4}`)
                break
            }
        }
    }while((palabraParaAdivinar4 !== palabra4) || (vidasParaAdivinar4 <= 0))
}
let acertijo4 = adivinaLaPalabra4()



let jugador1, jugador2

function armaLaFinal(){
    do{
        jugador1 = prompt("Vamos a presenciar la final de un torneo de futbol-tenis entre 2 de los jugadores que pasaron por el acertijo (Riquelme, Paredes,Busquets y Lloris ).Elegi al primer finalista(ESCRIBI SU APELLIDO)").toLowerCase()
        if(jugador1 == palabra1){
            alert(`Perfecto elegiste a ${palabra1}`)
            break
        }else if(jugador1 == palabra2){
            alert(`Perfecto elegiste a ${palabra2}`)
            break
        }else if(jugador1 == palabra3){
            alert(`Perfecto elegiste a ${palabra3}`)
            break
        }else if(jugador1 == palabra4){
            alert(`Perfecto elegiste a ${palabra4}`)
            break
        }else{
            alert("Elegi una opcion valida")
        }
    }while((isNaN(jugador1)) || (jugador1 == ""))
    
    do{
        jugador2 = prompt("Elegi al otro finalista(ESCRIBI SU APELLIDO)").toLowerCase()
        if(jugador2 == jugador1){
            alert("No se puede elegir 2 veces al mismo jugador")
        }else if (jugador2 == palabra1){
            alert(`Perfecto elegiste a ${palabra1}`)
            break
        }else if(jugador2 == palabra2){
            alert(`Perfecto elegiste a ${palabra2}`)
            break
        }else if(jugador2 == palabra3){
            alert(`Perfecto elegiste a ${palabra3}`)
            break
        }else if(jugador2 == palabra4){
            alert(`Perfecto elegiste a ${palabra4}`)
            break
        }else{
            alert("Elegi una opcion valida")
        }
    }while((jugador2 == jugador1) || ((isNaN(jugador2)) || (jugador2 == "")))

    alert(`La final es entre ${jugador1} y ${jugador2}`)
}

armaLaFinal()














