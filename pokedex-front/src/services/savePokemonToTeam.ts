import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_BACKEND_API;

export async function savePokemonToTeam(props:any){
    const pokemons = props.pokemon
    const payload = await axios.patch(`${url}${props.team}`, {
        pokemons
    })
    return payload;
}