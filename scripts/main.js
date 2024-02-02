
const pokemonList = document.getElementById('pokemonList');

function convertTypesToLi(pokemonTypes){
    return pokemonTypes.map(types => `<li class="type"> ${types.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
                <div class="name-number">
                    <span class="poke-name">${pokemon.name}</span>
                    <span class="poke-number">#${pokemon.id}</span>
                </div>

                <div class="type-img">
                    <ol class="types">
                    ${convertTypesToLi(pokemon.types).join("")}
                    </ol>
                    <img alt="${pokemon.name}" class="poke-icon" src="${pokemon.sprites.other.dream_world.front_default}">
                </div>
            </li>`
}

pokeApi.getPokemons().then((pokemons) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("")
})