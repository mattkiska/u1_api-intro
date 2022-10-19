console.log('working')

let button = document.querySelector("#searchButton")
let img = document.querySelector('#pokemonSprite')
let img2 = document.querySelector('#pokemonSprite2')

// Req and res, request and response

//use Event as a parameter
async function getData(event) {

    //preventing the default behavior of the browser
    //(to auto refresh)
    event.preventDefault()

let textInput = document.querySelector("#inputBar").value.toLowerCase()

fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log("success!", res.name)
        let pokemonName = document.querySelector('#pokemonName')
        pokemonName.innerText = res.name.toUpperCase()

        console.log("height", res.height)
        let pokemonHeight = document.querySelector('#pokemonHeight')
        pokemonHeight.innerText = "Height: " + res.height

        let pokemonNumber = document.querySelector('#number')
        pokemonNumber.innerText = "Pokedex #: " + res.id
        
        let pokemonWeight = document.querySelector('#weight')
        pokemonWeight.innerText = "Weight: " + res.weight

        img.src = res.sprites.front_default
        img2.src = res.sprites.back_default

        let pokemonMoves = document.querySelector('#pokemonMoves')
       pokemonMoves.innerText = res.moves.map((move) => {
        return move.move.name
       })
        let pokemonTypes = document.querySelector('#pokemonTypes')
        pokemonTypes.innerText = res.types.map((type) => {
            return type.type.name
        })
    })
    .catch( err => {
        console.log("error!", err)
    })
}

// 1 attach event to button
button.addEventListener('click', getData)

// 2 read the input bar variable/value
// 3 find the HTML element we want to populate
// 4 populate element, render data on screen
// 5 profit