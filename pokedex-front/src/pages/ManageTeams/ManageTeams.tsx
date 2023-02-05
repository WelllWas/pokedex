import { CreateTeamModal, TeamsTable, createTeam, getTeams, Navbar } from "../../Utils/Imports"
import { useNavigate } from "react-router-dom";
import styles from "./ManageTeams.module.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function ManageTeams() {
    const [teams, setTeams] = useState<any>([]);
    const [modal, setModal] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeams = async () => {
            const payload = await getTeams()
            setTeams(payload.data.body);
        }
        fetchTeams()
            .catch(console.error);
    }, [])

    async function createNewTeam(data: any) {
        const payload = await createTeam(data);
        if (payload.data.statusCode == 201) {
            window.location.reload();
        } else {
            alert(payload.data.body);
        }
    }

    return (
        <>
            <CreateTeamModal trigger={modal} setTrigger={() => setModal(!modal)} createTeam={createNewTeam}></CreateTeamModal>
            <Navbar navigation={() => navigate('/')} navType={2}></Navbar>
            <h1 className={styles.title}>Manage your Teams!</h1>
            <TeamsTable teams={teams}></TeamsTable>
            <div className={styles.createButton}>
                <Button variant="contained" onClick={() => setModal(!modal)}>Create</Button>
            </div>
        </>
    )
}