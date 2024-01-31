const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
                <div class="name-number">
                    <span class="poke-name">${pokemon.name}</span>
                    <span class="poke-number">#1</span>
                </div>

                <div class="type-img">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img alt="${pokemon.name}" class="poke-icon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg">
                </div>
            </li>`
}

const pokemonList = document.querySelector(".pokemons");

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for(let i = 0; i < pokemons.length; i++){
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon);
        }
    })