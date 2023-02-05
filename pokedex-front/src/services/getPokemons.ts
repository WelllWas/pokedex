import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_POKEMON_API;

export async function GetPokemons(){
    var endpoints = [];

    for (var i = 1; i < 906; i++) {
      endpoints.push(`${url}${i}/`);
    }
    const payload = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    return payload
}