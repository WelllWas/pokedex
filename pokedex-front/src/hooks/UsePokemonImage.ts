import axios from "axios";

export async function UsePokemonImage(poke: any) {
    const urlList: any[] = [];
    poke.forEach(async (element:any) => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${element}/`)
        .then(function(response){
            urlList.push(response.data.sprites.front_default);
        })
    });
    return urlList;
}