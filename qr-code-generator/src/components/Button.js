import { buttonStyle } from '../styles/styles';

export function Button(props) {
    return (
        <button style={buttonStyle} onClick={props.onClick} {...props}>{props.text}</button>
    );
}
