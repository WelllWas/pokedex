import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_BACKEND_API;

export async function deleteTeam(props:number){
    const payload = await axios.delete(`${url}${props}`);
    return payload;
}