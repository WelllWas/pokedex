import { defaultPokemon, getTeams, UseTeamOfSix, savePokemonToTeam, UseTypes, ModalCreateInputs } from "../../Utils/Imports"
import { Button, SelectChangeEvent } from "@mui/material";
import styles from "./index.module.css";
import { useState } from "react";

export function ModalPokemon(props: any) {
    const defaultPoke: any = defaultPokemon;
    const pokemon = props.poke || defaultPoke;
    const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const [drop, setDrop] = useState(false);
    const [team, setTeam] = useState('');
    const [teams, setTeams] = useState<any>([]);

    const handleChange = (event: SelectChangeEvent) => {
        setTeam(event.target.value);
    };

    async function openTeams() {
        const payload = await getTeams();
        const fetchedTeams = await UseTeamOfSix(payload.data.body);
        setTeams(fetchedTeams);
        setDrop(!drop);
    }

    function closeModal() {
        setDrop(false);
        setTeam('');
        props.setTrigger();
    }

    async function addPokemon() {
        const params = {
            team: team,
            pokemon: [pokemon.id]
        }
        const payload = await savePokemonToTeam(params)
        if (payload.data.statusCode == 201) {
            closeModal();
            alert('Pokemon successfully saved!');
        } else {
            alert(payload.data.body);
        }
    }

    return (props.trigger) ? (
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.modalContent}>
                    <h2>{capitalizedName}</h2>
                    <p>{UseTypes(pokemon)}</p>
                    <img src={pokemon.image} className={styles.image} alt="capitalizedName" />
                    <p>Weight: {pokemon.weight} lbs - Height: {pokemon.height} in</p>
                    <br />
                    <ModalCreateInputs
                        modalType={props.modalType}
                        drop={drop}
                        team={team}
                        teams={teams}
                        addPokemon={addPokemon}
                        openTeams={openTeams}
                        handleChange={handleChange} 
                    />
                    <br />
                    <Button variant="contained" color="error" className={styles.buttons} onClick={() => closeModal()}>Close</Button>
                </div>
            </div>
        </div>
    ) : <div></div>;
}