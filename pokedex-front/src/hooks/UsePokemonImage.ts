import axios from "axios";
require('dotenv').config();
const url = process.env.REACT_APP_POKEMON_API;

export async function UsePokemonImage(poke: any) {
    const urlList: any[] = [];
    poke.forEach(async (element:any) => {
        await axios.get(`${url}${element}/`)
        .then(function(response){
            urlList.push(response.data.sprites.front_default);
        })
    });
    return urlList;
}