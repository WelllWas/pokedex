import axios from "axios";
import { useEffect, useState } from "react";
require('dotenv').config();
const url = process.env.REACT_APP_POKEMON_API;

export const UsePokemons = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);

    useEffect(() => {
        var endpoints = [];
        for (var i = 1; i < 151; i++) {
            endpoints.push(`${url}${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

    }, [])


    return pokemons

};