let elList = document.querySelector(".list")
let elBtnPokemon = document.querySelector(".btn__pokemon")
let elBtnMovies = document.querySelector(".btn__movies") 
let elBtnRandom = document.querySelector(".btn__both")
let elBtnClear = document.querySelector(".btn__clear")
let elResult = document.querySelector(".result")

let pokemonArray = pokemons.slice(0, 12)
let moviesArray = movies.slice(0, 12)



elBtnPokemon.addEventListener("click", function () {
    renderArray(pokemonArray)
})

elBtnMovies.addEventListener("click", function () {
    renderArray(moviesArray)
})

elBtnRandom.addEventListener("click", function () {
    renderPokemovie(pokemonArray, moviesArray)
})

elBtnClear.addEventListener("click", function () {
    elResult.textContent = 0
    elList.innerHTML = "<li>Cleaned</li>"
    document.body.style.backgroundImage = "url('Solid_white.png')";
    document.body.style.backgroundRepeat ="no-repeat"
    document.body.style.backgroundPosition = "50% 20%";
    document.body.style.backgroundSize ="270px 150px"
})


function renderArray(array) {
    
    elList.innerHTML = null
    
    elResult.textContent = array.length
    
    for (const item of array) {
        
        let newli = document.createElement("li")
        let btn = document.createElement("a")
        let bgImg = document.createElement("body")
        let newImg = document.createElement("img")
        let newH2 = document.createElement("h2")
        let newH3 = document.createElement("h3")
        let newH32 = document.createElement("h4")
        let subYear = document.createElement("h5")
        let metr = document.createElement("h4")
        newImg.width = "200"
        
        
        
        if (item.name) {
            newImg.src = item.img
            bgImg.src = `upload.wikimedia.org/wikipedia/commons/thumb/${item.img}.png`
            newH2.textContent = item.name
            newH32.textContent = item.type
            subYear.textContent = item.weight
            metr.textContent = item.height
            document.body.style.backgroundImage = "url('pokemon.png')";
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundPosition = "50% 20%";
            document.body.style.backgroundSize ="210px 100px"
        }
        else{
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
            newH3.textContent = item.Title
            newH32.textContent = item.fulltitle
            subYear.textContent = item.movieYear
            metr.textContent = item.imdbRating
            btn.textContent = item.click
            btn.href = `https://youtu.be/${item.link}`
            document.body.style.backgroundImage = "url('movie.png')";
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundPosition = "50% 20%";
            document.body.style.backgroundSize ="130px 100px"
            
            
            
            
        }
        newli.appendChild(newImg)
        newli.appendChild(newH2)
        newli.appendChild(newH3)
        newli.appendChild(newH32)
        newli.appendChild(metr)
        newli.appendChild(subYear)
        newli.appendChild(btn)
        
        elList.appendChild(newli)
    }
}

function renderPokemovie(array1, array2) {
    elList.innerHTML = null
    
    let newArray = array1.concat(array2)
    let arrayLength = newArray
    
    elResult.textContent = arrayLength.length
    
    
    for (const item of arrayLength) {
        
        
        let newli = document.createElement("li")
        let btn = document.createElement("a")
        
        let newImg = document.createElement("img")
        let newH2 = document.createElement("h2")
        let newH3 = document.createElement("h3")
        let newH32 = document.createElement("h4")
        let subYear = document.createElement("h5")
        let metr = document.createElement("h4")
        newImg.width = "200"
        
        
        
        
        if (item.name) {
            newImg.src = item.img
            newH2.textContent = item.name
            newH32.textContent = item.type
            subYear.textContent = item.weight
            metr.textContent = item.height
            document.body.style.backgroundImage = "url('pokemovie.png')";
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundPosition = "50% 20%";
            document.body.style.backgroundSize ="270px 150px"
            
            
            
        }
        else{
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
            newH3.textContent = item.Title
            newH32.textContent = item.fulltitle
            subYear.textContent = item.movieYear
            metr.textContent = item.imdbRating
            btn.textContent = item.click
            btn.href = `https://youtu.be/${item.link}`
            
        }
        
        newli.appendChild(newImg)
        newli.appendChild(newH2)
        newli.appendChild(newH3)
        newli.appendChild(newH32)
        newli.appendChild(metr)
        newli.appendChild(subYear)
        newli.appendChild(btn)
        
        elList.appendChild(newli)
        
        
        
    }
}