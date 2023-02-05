export async function UseTeamOfSix(props:any){
    let validTeams:any=[];
    props.forEach((element: any) => {
        if(element.pokemons.length <6){
            validTeams.push(element)
        }
    });
    return validTeams;
}