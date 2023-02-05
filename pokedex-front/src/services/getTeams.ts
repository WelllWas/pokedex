import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_BACKEND_API;

export async function getTeams(){
    const payload = await axios.get(url || 'https://localhost:8080/teams');
    return payload;
}