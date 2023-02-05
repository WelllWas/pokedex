import axios from "axios";

export async function savePokemonToTeam(props:any){
    const pokemons = props.pokemon
    const payload = await axios.patch(`https://pokedex-back.herokuapp.com/teams/${props.team}`, {
        pokemons
    })
    return payload;
}