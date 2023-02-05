import axios from "axios";

export async function deleteTeam(props:number){
    const payload = await axios.delete(`https://pokedex-back.herokuapp.com/teams/${props}`);
    return payload;
}