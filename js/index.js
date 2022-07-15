

class JugadorIdeal{
    constructor (derecha, zurda, cabezazo, velocidad, tiro){
        this.derecha = derecha
        this.zurda = zurda
        this.cabezazo = cabezazo
        this.velocidad = velocidad
        this.tiro = tiro
    }
}

const jugadorId1 = new JugadorIdeal("Ronaldo", "Messi","Ibra", "Mbappe", "Maradona")
const jugadorId2 = new JugadorIdeal("Neymar", "robben","Ronaldo", "Messi", "Pele")
const jugadorId3 = new JugadorIdeal("Tevez", "Palermo","Vazquez", "Villa", "Riquelme")
const jugadorId4 = new JugadorIdeal("t", "e","V", "e", "z")
const jugadorId5 = new JugadorIdeal("M", "e","s", "s", "i")
const jugadorId6 = new JugadorIdeal("V", "i","l", "l", "a")

const jugadorId = [jugadorId1, jugadorId2, jugadorId3]
const jugadorIdFor = [jugadorId4, jugadorId5, jugadorId6]

const parrafos = document.getElementsByClassName("parrafo")[2]
console.log(parrafos)
const primerId = document.getElementById("firstId")

jugadorId.forEach(jugador => {
    primerId.innerHTML += `
    <div class= "claseJugadores">
        <p>derecha: ${jugador.derecha}</p>
        <p>zurda: ${jugador.zurda}</p>
        <p>cabezazo: ${jugador.cabezazo}</p>
        <p>velocidad: ${jugador.velocidad}</p>
        <p>tiro: ${jugador.tiro}</p>
    </div>
    `
})

for(let jugador of jugadorIdFor){
    segundoId.innerHTML += `
    <div class= "claseJugadores1">
        <p>derecha: ${jugador.derecha}</p>
        <p>zurda: ${jugador.zurda}</p>
        <p>cabezazo: ${jugador.cabezazo}</p>
        <p>velocidad: ${jugador.velocidad}</p>
        <p>tiro: ${jugador.tiro}</p>
    </div>
    `
}











