import axios from "axios";

export async function UsePokemonDetails(poke: number) {
    let data;
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}/`)
        .then(function (response: any) {
            data = response.data
        })
        .catch((e: any) => {
            data = e
        })
    return data;
}