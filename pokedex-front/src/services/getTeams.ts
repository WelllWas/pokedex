import axios from "axios";

export async function getTeams(){
    const payload = await axios.get(`https://pokedex-back.herokuapp.com/teams/`);
    return payload;
}