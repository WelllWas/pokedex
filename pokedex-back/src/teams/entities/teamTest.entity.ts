export class Team {
    id:number;
    name:string;
    pokemon:Array<string>;

    constructor(team?: Partial<Team>){
        this.name = team.name;
        this.pokemon = team.pokemon;
    }
}
