import { Dropdown } from "../../../Utils/Imports"

export function ModalCreateInputs(props: any) {
    return (
        <>
            {
                props.modalType == 1 ?
                    <>
                        {
                            props.drop == false ?
                                <button onClick={() => props.openTeams()} className="btn btn-primary">Add to a Team</button>
                                :
                                <Dropdown allTeams={props.teams} team={props.team} handleChange={props.handleChange}></Dropdown>
                        }
                        {props.team != '' &&
                            <>
                                <br />
                                <button
                                    className='btn btn-primary'
                                    onClick={() => props.addPokemon()}>
                                    Confirm
                                </button>
                            </>
                        }
                    </>
                    :
                    <></>
            }
        </>
    )
}