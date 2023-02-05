import axios from "axios";
export async function createTeam(props:any){
    const body = {
        ...props, 
        pokemons: []
    }
    const payload = await axios.post(`https://pokedex-back.herokuapp.com/teams/`, {
        ...body
    })
    return payload;
}