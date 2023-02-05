import { Grid } from "@mui/material"
import { PokemonCard } from "../PokemonCard"

export function PokemonTable(props: any) {
    return (
        <>
            {
                props.pokemons.map((pokemon: any, key: any) => (
                    <Grid item xs={10} sm={4} md={1} lg={1.5} key={key}>
                        <div onClick={() => { props.toggleModal(pokemon) }}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} id={pokemon.data.id} />
                        </div>
                    </Grid>
                ))
            }
        </>
    )
}