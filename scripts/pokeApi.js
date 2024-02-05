
const pokeApi = {}

function savePokemonDetail(pokemonDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;
    pokemon.types = pokemonDetail.types.map(types => types.type.name);
    pokemon.mainType = pokemon.types[0];
    pokemon.image = pokemonDetail.sprites.other.dream_world.front_default;
    return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then(response => response.json())
    .then(savePokemonDetail)
    .catch(error => console.error(error));
}

pokeApi.getPokemons = function(offset = 0, limit = 8){
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.error(error));
}