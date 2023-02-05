export function UseTypes(props: any) {
    if (props.types[1]) {
        return props.types[0].type.name + " | " + props.types[1].type.name;
    }
    return props.types[0].type.name;
}