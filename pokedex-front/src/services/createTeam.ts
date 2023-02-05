import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_BACKEND_API;

export async function createTeam(props:any){
    const body = {
        ...props, 
        pokemons: []
    }
    const payload = await axios.post(`${url}`, {
        ...body
    })
    return payload;
}