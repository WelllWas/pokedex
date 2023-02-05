import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {deleteTeam, ModalDelete, ListTeamPokemons} from "../../Utils/Imports";
import { useState } from "react";
import styles from "./index.module.css"

export function TeamsTable(props: any) {
    const [modal, setModal] = useState(false);
    const [teamId, setTeamId] = useState<number>(0);
    const teams = props.teams;

    async function deleteRow() {
        await deleteTeam(teamId)
        toggleModal();
        window.location.reload();
    }

    function toggleModal(team?: any) {
        if (team) {
            setTeamId(team);
        }
        setModal(!modal);
    }

    return (
        <>
            <ModalDelete trigger={modal} setTrigger={toggleModal} teamId={teamId} deleteRow={deleteRow} />
            <TableContainer component={Paper} className={styles.tableColour} style={{backgroundColor: '#406882'}}>
                <Table sx={{ minWidth: 650 }} size="medium" aria-label="Pokemon Team Table" className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Pokemon</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams.map((row: any) => (
                            <TableRow className={styles.tableTeam} key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">
                                    <ListTeamPokemons pokemons={row.pokemons}></ListTeamPokemons>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" color="error" onClick={() => toggleModal(row.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}