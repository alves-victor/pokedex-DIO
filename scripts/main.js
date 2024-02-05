
const pokemonList = document.getElementById('pokemonList');
const loadMoreBtn = document.getElementById('load-more');
const limit = 8;
let offset = 0;

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

function loadMorePokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
    })
}

loadMoreBtn.addEventListener('click', () => {
    offset += limit;
    loadMorePokemons(offset, limit);
})

loadMorePokemons();