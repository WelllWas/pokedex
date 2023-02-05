export function UsetypeColor(props: any) {
    const type = props.types[0].type.name;

    switch (type) {
        case 'fire':
            return '#E01F1F';

        case 'bug':
        case 'grass':
            return '#5DBF00';

        case 'normal':
        case 'flying':
            return 'white';

        case 'ghost':
        case 'dark':
            return '#676767';

        case 'poison':
            return '#B300E8';

        case 'water':
        case 'ice':
            return '#2092C2';

        case 'electric':
            return '#ECE900';

        case 'ground':
        case 'rock':
            return '#AC4C00';

        case 'psychic':
        case 'fairy':
            return 'pink';

        case 'fighting':
            return 'crimson';

        case 'steel':
            return 'silver';

        default:
            return 'white';
    }
}