import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_POKEMON_API;

export async function UsePokemonDetails(poke: number) {
    let data;
    await axios.get(`${url}${poke}/`)
        .then(function (response: any) {
            data = response.data
        })
        .catch((e: any) => {
            data = e
        })
    return data;
}