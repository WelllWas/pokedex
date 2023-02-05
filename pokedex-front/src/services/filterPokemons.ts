import { GetPokemons } from "./getPokemons";

export async function FilterPokemons(name: string, pokemons:any) {
    name = name.toLowerCase();
    var filteredPokemons: any = [];
    if (name === "") {
        const payload: any = await GetPokemons();
        return payload
    }
    for (var i in pokemons) {
        if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
        }
    }
    return filteredPokemons
}