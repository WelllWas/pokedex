import axios from "axios";

export async function GetPokemons(){
    var endpoints = [];

    for (var i = 1; i < 906; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    const payload = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    return payload
}