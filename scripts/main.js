
const pokemonList = document.getElementById('pokemonList');

function convertPokemonToLi(pokemon){
    return `<li class="pokemon ${pokemon.types[0]}">
                <div class="name-number">
                    <span class="poke-name">${pokemon.name}</span>
                    <span class="poke-number">#${pokemon.number}</span>
                </div>

                <div class="type-img">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img alt="${pokemon.name}" class="poke-icon" src="${pokemon.image}">
                </div>
            </li>`
}

pokeApi.getPokemons().then((pokemons) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("")
})