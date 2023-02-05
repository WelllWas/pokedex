import styles from "./index.module.css";
import { Button } from "@mui/material";

export function ModalDelete(props: any) {
    function closeModal() {
        props.setTrigger();
    }

    return (props.trigger) ? (
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.modalContent}>
                    <h2>Are you sure you want to delete this team?</h2>
                    <br />
                    <Button variant="contained" className={styles.buttons} onClick={() => closeModal()}>Close</Button>
                    <Button variant="contained" className={styles.buttons} onClick={props.deleteRow} color="error">Delete</Button>
                </div>
            </div>
        </div>
    ) : <div></div>;
}