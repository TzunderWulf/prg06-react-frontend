export function Character(props) {
    return(
        <div className="block-around ">
            <h2>Name: {props.name}</h2>
            <h2>Element: {props.element}</h2>
        </div>
    );
}