import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function Dropdown(props: any) {
    const teams = props.allTeams;
    
    return (
        <FormControl fullWidth>
            <InputLabel id="teamSelectLabel">Team</InputLabel>
            <Select
                labelId="teamSelectLabel"
                id="teamSelect"
                defaultValue = ""
                value={props.team}
                label="Team"
                onChange={props.handleChange}
            >
                {
                    teams?.map(({name, id}:any, index:number)=>{
                        return(
                        <MenuItem key={index} value={id}>
                            {name}
                        </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}