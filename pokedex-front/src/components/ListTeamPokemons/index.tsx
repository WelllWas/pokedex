import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { UsePokemonImage, UsePokemonDetails, ModalPokemon} from "../../Utils/Imports"

type pokemon = {
    id: string,
    name: string,
    image: string,
    types: string,
    weight: string,
    height: string
}

export function ListTeamPokemons(props: any) {
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState<any>({});
    const [poke, setPoke] = useState<pokemon>();

    const row = props.pokemons;

    function toggleModal(pokemon?: any) {
        if (pokemon) {
            const singlePoke: pokemon = {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                types: pokemon.types,
                weight: pokemon.weight,
                height: pokemon.height,
            }
            setPoke(singlePoke);
        }
        setModal(!modal);
    }

    useEffect(() => {
        const setImages = async () => {
            const payload = await UsePokemonImage(row);
            setImg(payload);
        }
        setImages()
    }, [])

    async function openDetails(poke: number) {
        const payload = await UsePokemonDetails(poke);
        toggleModal(payload);
    }

    return (
        <>
        <ModalPokemon trigger={modal} setTrigger={toggleModal} poke={poke} modalType={2}></ModalPokemon>
            {row.length == 0 ?
                <p>No pokemons yet</p>
                :
                <>
                    {
                        row.map((poke: number, index: any) => {
                            return (
                                <img onClick={async () => await openDetails(poke)} src={img[index]} alt="poke" className={styles.pokeImage} key={poke} />
                            )
                        })
                    }
                </>
            }

        </>
    )
}