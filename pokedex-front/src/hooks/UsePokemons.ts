import axios from "axios";
import { useEffect, useState } from "react";

export const UsePokemons = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        var endpoints = [];
        for (var i = 1; i < 151; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

    }, [])


    return pokemons

};