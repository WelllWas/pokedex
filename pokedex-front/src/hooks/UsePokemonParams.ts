type pokemonType = {
    id: string,
    name: string,
    image: string,
    types: string,
    weight: string,
    height: string
}

export function UsePokemonParams(pokemon: any) {
    const singlePoke: pokemonType = {
        id: pokemon.data.id,
        name: pokemon.data.name,
        image: pokemon.data.sprites.front_default,
        types: pokemon.data.types,
        weight: pokemon.data.weight,
        height: pokemon.data.height,
    }
    return singlePoke;
}