import styles from "./index.module.css";
import { useForm } from 'react-hook-form';
import { Button } from "@mui/material";

export function CreateTeamModal(props: any) {
    const { register, handleSubmit } = useForm();

    function closeModal() {
        props.setTrigger();
    }

    const createNewTeam = async (data: any) => {
        props.createTeam(data);
        closeModal();
    }

    return (props.trigger) ? (
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.modalContent}>
                    <h2>Please, give a name to your new team!</h2>
                    <br />

                    <form onSubmit={handleSubmit(createNewTeam)} autoComplete="off">
                        <div className="input-group mb-3">
                            <input maxLength={25} required {...register("name")} type="text" className="form-control" placeholder="Type a cool name!" />
                        </div>
                        <br />
                        <Button variant="contained" className={styles.buttons} color="error" onClick={() => closeModal()}>Close</Button>
                        <Button variant="contained" className={styles.buttons} type="submit">Create</Button>
                    </form>
                </div>
            </div>
        </div>
    ) : <div></div>;
}